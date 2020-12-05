import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import unbeatable from "./unbeatable.jpg";
import justus from "./justus.jpg";
import convergence from "./convergence.jpg";
import Container from "react-bootstrap/Container";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { bgcolor: props.bgcolor };
  }

  createProject = (props) => {
    return (
      <div
        style={{
          padding: " 0vw 1vw 0vw 0vw",
        }}
      >
        <Row
          style={{
            borderRadius: "20px",
            backgroundColor: "#b3eeff",
            borderWidth: "3px",
            borderColor: "black",
            border: "solid",
          }}
        >
          <Col>
            <div style={{ textAlign: "left", paddingTop: "20px" }}>
              <div>
                <h1>
                  {" "}
                  {props.title} <sup style={{ color: "blue" }}>{props.qualifier}</sup>{" "}
                </h1>
                <hr></hr>
              </div>
              <div>
                <img
                  alt="project text"
                  src={props.image}
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "inline",
                    float: "right",
                  }}
                ></img>
                <br></br>
                <br></br>
                <p> {props.text} </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.bgcolor, width: "100%" }}>
        <Container fluid style={{ padding: "0px", margin: "0px", width: "80%", margin: "auto" }}>
          <Row>
            <Col style={{ padding: "0px" }}>
              <div style={{ width: "100%" }}>
                <br></br>
                <this.createProject
                  left="true"
                  qualifier="(Testing)"
                  title="Convergence App"
                  image={convergence}
                  text="Convergence is an group organization tool developed on React Native for Android and iOS that utilizes the google maps API to organize meetup events. Intended for the post pandemic world - convergence allows you to create private sessions with your friends whereby you can select a meetup location and see everyones positions on a map. The application calculates the distance from each participant to the meetup location and gives the users updates on how far away each person is. It can even update you on the optimal time to leave your house so that everyone can be there on time!"
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="false"
                  title="Unbeatable App"
                  image={unbeatable}
                  qualifier="(In Development)"
                  text="The Unbeatable App is a React Native application for both Android and iOS that is a collection of all of my game breaking algorithms that can be used to make the most optimal moves for various types of board games (including): Scrabble, Sudoku, Chess, ConnectFour, BlackJack, Battleship, etc. Additionally as part of my venture into machine learning I am expanding my backend API to utilize the TensorFlow library, as well as refactoring my code to better utilize clustering."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="Just Us Journaling"
                  image={justus}
                  qualifier="(Unpublished)"
                  text="Just Us Journaling (unpublished) was the first android application that I created inspired by Gratitude (android app), which was developed around the idea of positive affirmation and journaling the things that you are grateful for. The application includes a shared journal, daily appreciation logging reminders, and a shared picture gallery. The application was written in Java and on Android Studio."
                ></this.createProject>
                <br></br>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
