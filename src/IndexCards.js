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
import languagesPic from "./languages.jpg";
import frontendPic from "./frontend.jpg";
import backendPic from "./backend.jpg";
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
          <img
            src={this.state.img}
            style={cardImg}
            alt={this.state.header}
          ></img>
          <h4 style={h4Style}> {this.state.header} </h4>
          <hr></hr>
          <div>{this.props.children}</div>
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
                p="Tech skills"
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
                p="Soft skills"
                select={this.state.selectedLink3}
                color={tabColors[2]}
              ></IndexCardLink>
            </Nav.Item>
          </Nav>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="first">
              <Row style={rowStyle}>
                <MyCard header="Languages / Other" img={languagesPic} text="">
                  <h5 style={{ display: "inline" }}>Javascript - </h5>
                  <p style={{ display: "inline" }}>5 years of experience</p>
                  <br></br>
                  <br></br>
                  <h5 style={{ display: "inline" }}>Java - </h5>
                  <p style={{ display: "inline" }}>4 years of experience</p>
                  <br></br>
                  <br></br>
                  <h5 style={{ display: "inline" }}>Python - </h5>
                  <p style={{ display: "inline" }}>6 years of experience</p>
                  <br></br>
                  <br></br>
                  <h5 style={{ display: "inline" }}>Android Development - </h5>
                  <p style={{ display: "inline" }}>1 year of experience</p>
                  <br></br>
                  <br></br>
                  <h5 style={{ display: "inline" }}>
                    Node Package Manager (NPM)
                  </h5>
                  <br></br>
                  <br></br>
                  <h5 style={{ display: "inline" }}>Github</h5>
                  <br></br>
                  <br></br>
                </MyCard>
                <MyCard header="Frontend" img={frontendPic} text="pietext">
                  <h5>React {"&"} React-Native</h5>
                  <br></br>
                  <h5>HTML {"&"} CSS </h5>
                  <br></br>
                  <h5>Responsive Web Design</h5>
                  <br></br>
                  <h5>HTML DOM {"&"} BOM</h5>
                  <br></br>
                  <h5>Bootstrap {"&"} React-Bootstrap</h5>
                  <br></br>
                  <h5>AJAX </h5>
                  <br></br>
                </MyCard>
                <MyCard header="Backend" img={backendPic} text="pietext">
                  <h5>MongoDB {" & "} SQL Server</h5>
                  <br></br>
                  <h5>Node {"&"} Express </h5>
                  <br></br>
                  <h5>AWS (Elastic BeanStalk)</h5>
                  <br></br>
                  <h5>AWS (Amplify {" & "} S3)</h5>
                  <br></br>
                  <h5>REST API Development</h5>
                  <br></br>
                </MyCard>
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
                >
                  <h3>Sept 2019- Sept 2020</h3>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Lead multi-functional commercial and
                          government/military proposals consisting of engineers,
                          managers, cost estimators, contracts, and operations
                          personnel as part of the Engineering New Business
                          team.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          {" "}
                          Responsible for proposal schedule generation and
                          management, management of proposal technical and
                          management volumes, finding resource staffing with
                          management and providing leadership to the bid team,
                          closing knowledge gaps, managing and generating cost
                          roll-ups for formal ROM submittals and FFP submittals,
                          and making technical presentations to managers and
                          directors.{" "}
                        </p>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </MyCard>
                <MyCard
                  header="BAE - Software Engineer 2"
                  text="pietext"
                  img={baelogoPic}
                >
                  <h3>Oct 2016- Aug 2019</h3>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Developed frontend/backend APIs for the BAE Systems
                          proprietary Interface Control Document (ICD) tools for
                          automated code generation and test verification using
                          Javascript/ SQL Server / NodeJs/ HTML and CSS
                        </p>
                      </li>
                      <li>
                        <p>
                          Developer of the Interface Control Document (ICD)
                          automation tool for the Common Data Network on the
                          Boeing 777x. Individually developed tool chain and
                          database for storing and processing XML based
                          interface documents using Python, SQL, and XSLT.
                        </p>
                      </li>
                      <li>
                        <p>
                          Integration/Verification lead for the Circuit Breaker
                          Interface Control (CBIC) application for the Boeing
                          777x Flight Control Module. Job included developing
                          python tests to verify requirement coverage, and
                          hardware debugging with logic analyzers and probes.
                        </p>
                      </li>
                      <li>
                        <p>
                          Test developer/test verification engineer for the GE9X
                          engine control system and the On-Board Inert Gas
                          Generation System for the KC-390 jet. Tests were
                          developed in GTI, a BAE Systems proprietary language
                          and run to verify full compliance to the software
                          requirements.
                        </p>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </MyCard>
                <MyCard
                  header="Intel - Linux Kernel Developer"
                  img={intellogoPic}
                  text="pietext"
                >
                  <h3>Feb 2018- August 2019</h3>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Wrote and submitted patches for the Linux kernel and
                          Linux UEFI Validation Project (LUV). Patches focused
                          on reducing the size of the kernel proper by reducing
                          the amount of zero padding through the implementation
                          of a smaller page alignment. Achieved a kernel proper
                          size reduction of 23% using varying approaches
                        </p>
                      </li>
                    </ul>
                  </div>
                  <br></br>
                </MyCard>
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
