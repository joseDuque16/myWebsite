import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/esm/Alert";
import GamesSnake from "./Games_Snake";
import TicTacToe from "./TicTacToe";

class GamesSelect extends Component {
  constructor(props) {
    super(props);

    this.state = { page: props.page };
    this.changeState = this.changeState.bind(this);
  }

  changeState(val) {
    this.setState({ page: val });
  }

  render() {
    const myGamesRow1 = ["TicTacToe", "Connect Four"];

    const myGamesRow2 = ["Chess", "Sudoku Solver"];

    const myGamesRow3 = ["Word Search", "Snake"];

    const myGameButtons = {
      width: "70%",
      margin: "auto",
      marginTop: "2vw",
      marginBottom: "2vw",
    };

    const Game_Snake = {
      display: this.state.page === "Snake" ? "block" : "none",
    };

    const TicTacToe_Style = {
      display: this.state.page === "TicTacToe" ? "block" : "none",
    };

    const createGamesRow = (input, idxInput) => {
      const output = input.map((value, idx) => {
        return (
          <Col key={value + idxInput + "Col"}>
            <Button
              style={myGameButtons}
              onClick={() => {
                this.changeState(value);
              }}
              key={value + idxInput + "Button"}
            >
              {" "}
              {value}
            </Button>
          </Col>
        );
      });
      return output;
    };
    return (
      <div>
        <div
          width="100%"
          style={{
            display: this.state.page === "select" ? "block" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <Alert
              variant="info"
              style={{
                borderRadius: "30px",
              }}
            >
              <Alert.Heading> Interactive Portfolio </Alert.Heading> <hr />
              <p>
                As well as working on my own projects and being an active
                competitor on coding websites, I like building games and trying
                to automate them. Please enjoy some sample projects that i have
                adapted for my react website:
              </p>
            </Alert>
          </div>
          <Row>{createGamesRow(myGamesRow1, 1)}</Row>
          <Row>{createGamesRow(myGamesRow2, 2)}</Row>
          <Row>{createGamesRow(myGamesRow3, 3)}</Row>
        </div>
        <div style={Game_Snake}>
          <GamesSnake></GamesSnake>
        </div>
        <div style={TicTacToe_Style}>
          <TicTacToe></TicTacToe>
        </div>
      </div>
    );
  }
}

export default GamesSelect;
