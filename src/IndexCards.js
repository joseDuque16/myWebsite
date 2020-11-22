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
import languagesPic from "./languages.png";
import frontendPic from "./frontend.png";
import backendPic from "./backend.png";
import baelogoPic from "./baelogo.png";
import intellogoPic from "./intellogo.png";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header ? props.header : "default",
      text: props.text ? props.text : "default text",
      img: props.img,
    };
  }

  render() {
    const h4Style = {
      paddingTop: "1vw",
    };
    const pStyle = {
      fontSize: "1.6vw",
    };
    const cardStyle = {
      margin: "4px",
    };

    const cardImg = {
      Width: "100px",
      height: "100px",
      borderRadius: "50%",
    };

    return (
      <Col sm>
        <div style={cardStyle} className="indexCardDiv roundedDiv">
          <br></br>
          <img src={this.state.img} style={cardImg} alt="languages.png"></img>
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
    const tabColors = ["#D0e5fa", "#f7e9c5", "#a5cbaf"];
    const curColor = this.state.selectedLink1
      ? tabColors[0]
      : this.state.selectedLink2
      ? tabColors[1]
      : tabColors[2];

    const navContainer = {
      margin: "auto",
      marginBottom: "2vw",
      backgroundColor: "white",
    };
    const tabContainer = {
      margin: "auto",
      width: "100%",
      backgroundColor: curColor,
    };

    const container = {
      borderRadius: "25px",
      width: "100%",
      margin: "auto",
      backgroundColor: curColor,
    };

    const rowStyle = {
      marginLeft: "3vw",
      marginRight: "3vw",
    };

    return (
      <div style={container}>
        <Tab.Container defaultActiveKey="first">
          <Nav
            style={navContainer}
            className="justify-content-center"
            variant="tabs"
            onSelect={this.tabSelected}
            fill
          >
            <Nav.Item>
              <IndexCardLink
                eventKey="first"
                p="Tech skillz"
                select={this.state.selectedLink1}
                color={tabColors[0]}
              ></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="second"
                p="Experience"
                select={this.state.selectedLink2}
                color={tabColors[1]}
              ></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="third"
                p="Soft skillz"
                select={this.state.selectedLink3}
                color={tabColors[2]}
              ></IndexCardLink>
            </Nav.Item>
          </Nav>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="first">
              <Row style={rowStyle}>
                <MyCard
                  header="Languages"
                  img={languagesPic}
                  text="pietext"
                ></MyCard>
                <MyCard
                  header="Frontend"
                  img={frontendPic}
                  text="pietext"
                ></MyCard>
                <MyCard
                  header="Backend"
                  img={backendPic}
                  text="pietext"
                ></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="second">
              <Row style={rowStyle}>
                <MyCard
                  header="BAE - Proposal Lead"
                  text="pietext"
                  img={baelogoPic}
                ></MyCard>
                <MyCard
                  header="BAE - Software Engineer 2"
                  text="pietext"
                  img={baelogoPic}
                ></MyCard>
                <MyCard
                  header="Intel - Linux Kernel Developer"
                  img={intellogoPic}
                  text="pietext"
                ></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="third">
              <Row style={rowStyle}>
                <MyCard header="Leadership"></MyCard>
                <MyCard header="Service" text="pietext"></MyCard>
                <MyCard header="Other" text="pietext"></MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <br></br>
        </Tab.Container>
      </div>
    );
  }
}

export default IndexCard;
