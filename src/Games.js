import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import GamesSelect from "./Games_Select";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = { bgcolor: props.bgcolor, page: "select" };
  }

  render() {
    const gameContainer = {
      width: "600px",
      minWidth: "70%",
      maxWidth: "100%",
      margin: "auto",
      backgroundColor: "white",
      marginBottom: "20px",
    };

    return (
      <div style={{ backgroundColor: this.state.bgcolor }}>
        <br></br>
        <div style={gameContainer}>
          <GamesSelect page={this.state.page}></GamesSelect>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Games;
