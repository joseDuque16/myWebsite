import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <p> {this.state.text} </p>
        </div>
      </Col>
    );
  }
}

class IndexCard extends Component {
  render() {
    const cardStyle = {
      width: "95%",
      margin: "auto",
      marginTop: "2vw",
    };
    return (
      <Card style={cardStyle}>
        <Card.Header>
          <Nav
            className="justify-content-center"
            variant="tabs"
            defaultActiveKey="#first"
          >
            <Nav.Item>
              <Nav.Link href="/">Tech Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ExperienceTab">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/SoftSkillsTab">Soft Skills</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Router>
            <Switch>
              <Route path="/ExperienceTab" exact>
                <Container>
                  <Row>
                    <MyCard header="BAE Systems"></MyCard>
                    <MyCard header="BAE Systems" text="pietext"></MyCard>
                    <MyCard header="Intel" text="pietext"></MyCard>
                  </Row>
                </Container>
              </Route>
            </Switch>
            <Switch>
              <Route path="/SoftSkillsTab" exact>
                <Container>
                  <Row>
                    <MyCard header="Leadership"></MyCard>
                    <MyCard header="Service" text="pietext"></MyCard>
                    <MyCard header="Other" text="pietext"></MyCard>
                  </Row>
                </Container>
              </Route>
            </Switch>
            <Switch>
              <Route path="/" exact>
                <Container>
                  <Row>
                    <MyCard header="Languages"></MyCard>
                    <MyCard header="Frontend" text="pietext"></MyCard>
                    <MyCard header="Backend" text="pietext"></MyCard>
                  </Row>
                </Container>
              </Route>
            </Switch>
          </Router>
        </Card.Body>
      </Card>
    );
  }
}

export default IndexCard;
