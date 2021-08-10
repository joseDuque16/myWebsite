import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import "./Styles/App.scss";
import IndexCardLink from "./IndexCardLink";
import languagesPic from "./Images/languages.jpg";
import frontendPic from "./Images/frontend.jpg";
import backendPic from "./Images/backend.jpg";
import baelogoPic from "./Images/baelogo.png";
import growersLogo from "./Images/growersLogo.png";
import intellogoPic from "./Images/intellogo.png";
import other from "./Images/other.jpg";
import shpe from "./Images/shpe.jpg";
import leadership from "./Images/leadership.jpg";
import "./Styles/IndexCards.scss";

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
      <Col lg>
        <div style={cardStyle} className="indexCardDiv roundedDiv">
          <br></br>
          <img src={this.state.img} style={cardImg} alt={this.state.header}></img>
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

  unrollText = (array) => {
    let output = array.map((val, idx, arr) => {
      return (
        <>
          <h5 className="IndexCardText">{val}</h5>
        </>
      );
    });

    return output;
  };

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
      fontSize: "20px",
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
            fill>
            <Nav.Item>
              <IndexCardLink
                eventKey="first"
                p="Technical Skills"
                select={this.state.selectedLink1}
                color={tabColors[0]}></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="second"
                p="Experience"
                select={this.state.selectedLink2}
                color={tabColors[1]}></IndexCardLink>
            </Nav.Item>
            <Nav.Item>
              <IndexCardLink
                eventKey="third"
                p="Soft Skills"
                select={this.state.selectedLink3}
                color={tabColors[2]}></IndexCardLink>
            </Nav.Item>
          </Nav>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="first">
              <Row style={rowStyle}>
                <MyCard header="Languages / Other" img={languagesPic} text="">
                  {this.unrollText([
                    "Javascript, Typescript, Java, Python",
                    "Progressive Web Apps",
                    "Continuous Integration  / Continuous Development (CI/CD)",
                    "Scripting & Automation (bash, shell, python)",
                    "Agile Methodologies",
                  ])}
                </MyCard>
                <MyCard header="Frontend" img={frontendPic} text="">
                  {this.unrollText([
                    "React & React-Native",
                    "Redux",
                    "HTML/CSS/SASS/AJAX",
                    "Responsive Web Design",
                    "Bootstrap/ UI-Kitten",
                  ])}
                </MyCard>
                <MyCard header="Backend" img={backendPic} text="">
                  {this.unrollText([
                    "Node & Express",
                    "MongoDB & SQL Server",
                    "Docker / AWS (Elastic BeanStalk)",
                    "AWS (Amplify  &  S3)",
                    "REST API Development",
                  ])}
                </MyCard>
              </Row>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content style={tabContainer}>
            <Tab.Pane eventKey="second">
              <Row style={rowStyle}>
                <MyCard header="Growers - Full Stack Developer" text="pietext" img={growersLogo}>
                  <h4>Feb 2021 - Present</h4>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Building front end and backend web {"&"} mobile application for agricultulral technology 
                          startup. Stack built using Node/Express, React/React Native, and SQL/Sequelize. Work broadly
                          across front end and backend developing new features, refactoring code, and resolving bugs.
                        </p>
                      </li>
                      <li>
                        <p>
                          {" "}
                          Front end library primarily built with UI-Kitten, as well as many custom built components.
                          Backend database built using custom SQL scripts and Sequelize ORM.{" "}
                        </p>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </MyCard>
                <MyCard header="BAE - Software Engineer 2" text="pietext" img={baelogoPic}>
                  <h4>Oct 2016 - Sept 2020</h4>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Developed frontend/backend APIs for the BAE Systems proprietary Interface
                          Control Document (ICD) tools for automated code generation and test
                          verification using Javascript/ SQL Server / NodeJs/ HTML and CSS
                        </p>
                      </li>
                      <li>
                        <p>
                          Developer of the Interface Control Document (ICD) automation tool for the
                          Common Data Network on the Boeing 777x. Individually developed tool chain
                          and database for storing and processing XML based interface documents
                          using Python, SQL, and XSLT.
                        </p>
                      </li>
                      <li>
                        <p>
                          Integration/Verification lead for the Circuit Breaker Interface Control
                          (CBIC) application for the Boeing 777x Flight Control Module. Job included
                          developing python tests to verify requirement coverage, and hardware
                          debugging with logic analyzers and probes.
                        </p>
                      </li>
                      <li>
                        <p>
                          Test developer/test verification engineer for the GE9X engine control
                          system and the On-Board Inert Gas Generation System for the KC-390 jet.
                          Tests were developed in GTI, a BAE Systems proprietary language and run to
                          verify full compliance to the software requirements.
                        </p>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </MyCard>
                <MyCard header="Intel - Linux Kernel Developer" img={intellogoPic} text="pietext">
                  <h4>June 2015 - August 2015</h4>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          Wrote and submitted patches for the Linux kernel and Linux UEFI Validation
                          Project (LUV). Patches focused on reducing the size of the kernel proper
                          by reducing the amount of zero padding through the implementation of a
                          smaller page alignment. Achieved a kernel proper size reduction of 23%
                          using varying approaches
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
                <MyCard header="Leadership" img={leadership}>
                  <h4 style={{ margin: "4px" }}>
                    BAE Systems - Engineering Leadership Program (ELDP)
                  </h4>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          <b>ELDP Graduate</b> - Graduated from the BAE Systems three year
                          Leadership Development program in addition to day to day software
                          developer duties at the company.
                        </p>
                      </li>
                      <li>
                        <p>
                          Led multi functional teams at yearly industry wide conferences. Competed
                          to solve technical problems against tens of other teams from across the
                          country.
                        </p>
                      </li>
                      <li>
                        <p>
                          Participated in monthly leadership development modules, in addition to
                          weekly classes on technical topics ranging from control systems testing
                          and development to embedded systems programming.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <br></br>
                </MyCard>
                <MyCard header="Service" text="pietext" img={shpe}>
                  <h4 style={{ margin: "4px" }}>
                    Society of Hispanic Professional Engineers (SHPE)
                  </h4>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p>
                          <b> Director of Community Service</b> - For two years I organized
                          community service outreach events from cancer walks to flood cleanups and
                          blood drives
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Webmaster </b> - Developed the website and managed social media
                          platforms for the Binghamton University chapter of SHPE
                        </p>
                      </li>
                      <hr></hr>
                      <li>
                        <p>
                          <b>(Other) Phelps Memorial Hospital </b>- Volunteered at local hospital
                          throughout high school transporting patients and lab samples as well as
                          onboarding and teaching new volunteers
                        </p>
                      </li>
                    </ul>
                  </div>
                  <br></br>
                </MyCard>

                <MyCard header="Other" text="pietext" img={other}>
                  <div style={{ textAlign: "left", marginRight: "1vw" }}>
                    <ul>
                      <li>
                        <p style={{ textAlign: "left" }}>
                          <b>Fluency in : English, Spanish </b>
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Entrepreneurship {" & "} Creative Thinking </b> - Deep passion and
                          dedication to brainstorming and pursuing opportunities that add value to
                          society by means of automation and through excellent user experiences
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Time Management {" & "} Self Motivation </b> - My passions and
                          ambitions for software development extend further than 9-5. When I am
                          passionate about a project I will not stop until it is complete.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Adaptability {" & "} Love of Learning </b> - There is no problem or
                          field of study I am unwilling to tackle. I have a Masters {" & "}{" "}
                          Bachelors degree in Computer and Electrical Engineering but the field of
                          Software Development is one of rapid growth. I am constantly learning and
                          applying my knowledge of new technologies.
                        </p>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </MyCard>
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
