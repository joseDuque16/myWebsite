import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexCardLink from "./IndexCardLink";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header ? props.header : "default",
      text: props.text ? props.text : "default text",
    };
  }

  render() {
    const h4Style = {
      paddingTop: "1vw",
    };
    const pStyle = {
      fontSize: "1.6vw",
    };

    return (
      <Col sm>
        <div className="indexCardDiv roundedDiv">
          <br></br>
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          <h4 style={h4Style}> {this.state.header} </h4>
          <hr></hr>
          <p style={pStyle}> {this.state.text} </p>
        </div>
      </Col>
    );
  }
}

class IndexCard extends Component {
  constructor() {
    super();
    this.state = {
      selected: "first",
      selectedLink1: true,
      selectedLink2: false,
      selectedLink3: false,
    };
  }

  tabSelected = (eventKey) => {
    this.setState({ selected: eventKey });
    switch (eventKey) {
      case "first":
        this.setState({
          selectedLink1: true,
          selectedLink2: false,
          selectedLink3: false,
        });
        break;
      case "second":
        this.setState({
          selectedLink1: false,
          selectedLink2: true,
          selectedLink3: false,
        });
        break;
      case "third":
        this.setState({
          selectedLink1: false,
          selectedLink2: false,
          selectedLink3: true,
        });
        break;
      default:
        console.log("error selected a tab that doesnt exist");
        break;
    }
    return;
  };

  render() {
    const navContainer = {
      margin: "auto",
      marginBottom: "2vw",
      backgroundColor: "#484f57",
    };
    const tabContainer = {
      margin: "auto",
    };
    const container = {
      borderRadius: "25px",
      width: "95%",
      margin: "auto",
    };

    return (
      <div style={container}>
        <Tab.Container defaultActiveKey="first">
          <Nav
            style={navContainer}
            className="justify-content-center"
            variant="tabs"
            onSelect={this.tabSelected}
          >
            <Nav.Item>
              <IndexCardLink
                eventKey="first"
                p="Tech skillz"
                select={this.state.selectedLink1}
              ></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="second"
                p="Experience"
                select={this.state.selectedLink2}
              ></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="third"
                p="Soft skillz"
                select={this.state.selectedLink3}
              ></IndexCardLink>
            </Nav.Item>
          </Nav>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="first">
              <Row>
                <MyCard header="Languages"></MyCard>
                <MyCard header="Frontend" text="pietext"></MyCard>
                <MyCard header="Backend" text="pietext"></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="second">
              <Row>
                <MyCard header="BAE Systems"></MyCard>
                <MyCard header="BAE Systems" text="pietext"></MyCard>
                <MyCard header="Intel" text="pietext"></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="third">
              <Row>
                <MyCard header="Leadership"></MyCard>
                <MyCard header="Service" text="pietext"></MyCard>
                <MyCard header="Other" text="pietext"></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default IndexCard;
