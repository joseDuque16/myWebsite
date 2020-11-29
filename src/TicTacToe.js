import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import white from "./white.jpg";
import oImage from "./oImage.jpg";
import xImage from "./xImage.jpg";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardStatus: [null, null, null, null, null, null, null, null, null],
      playerPiece: true, //true is x, false is 0, null is empty
      gameOver: true,
      computerMove: false,
      gameStarted: false,
      playerWin: null, // true is player won, false is player lost, null is a draw
    };
  }

  checkWin = (player, board) => {
    // checks wether the player or computer have a winning move
    var playerPiece = this.state.playerPiece;
    var gameWin = false;
    if (player !== true) {
      playerPiece = !playerPiece;
    }

    //Number of winning moves = 2+3+3
    if (
      board[0] === playerPiece &&
      board[1] === playerPiece &&
      board[2] === playerPiece
    ) {
      // first horizontal line
      gameWin = true;
    } else if (
      board[3] === playerPiece &&
      board[4] === playerPiece &&
      board[5] === playerPiece
    ) {
      // second horizontal line
      gameWin = true;
    } else if (
      board[6] === playerPiece &&
      board[7] === playerPiece &&
      board[8] === playerPiece
    ) {
      // third horizontal line
      gameWin = true;
    } else if (
      board[0] === playerPiece &&
      board[3] === playerPiece &&
      board[6] === playerPiece
    ) {
      //first vertical
      gameWin = true;
    } else if (
      board[1] === playerPiece &&
      board[4] === playerPiece &&
      board[7] === playerPiece
    ) {
      //second vertical
      gameWin = true;
    } else if (
      board[2] === playerPiece &&
      board[5] === playerPiece &&
      board[8] === playerPiece
    ) {
      //third vertical
      gameWin = true;
    } else if (
      board[0] === playerPiece &&
      board[4] === playerPiece &&
      board[8] === playerPiece
    ) {
      // \ diagonal
      gameWin = true;
    } else if (
      board[2] === playerPiece &&
      board[4] === playerPiece &&
      board[6] === playerPiece
    ) {
      // / diagonal
      gameWin = true;
    } else {
      // Board is entirely full but no winner, therefore playerWin = null for draw
      var noMoreMoves = true;
      for (var i = 0; i < 9; i++) {
        if (board[i] === null) {
          noMoreMoves = false;
          break;
        }
      }

      if (noMoreMoves) {
        gameWin = true;
        player = null;
      }
    }
    if (gameWin === true) {
      this.setState({ gameOver: true, playerWin: player });
      return true;
    }
    return false;
  };

  computerMove = () => {
    if (this.state.gameOver === true) return;
    var board = this.state.boardStatus;
    if (this.state.gameDifficulty === "easy") {
      // easy AI
      var unpicked = [];
      for (var i = 0; i < 9; i++) {
        if (board[i] == null) {
          unpicked.push(i);
        }
      }
      console.log(unpicked);
      var randNum = unpicked[Math.round(Math.random() * (unpicked.length - 1))];
      console.log("picked: " + randNum);

      board[randNum] = !this.state.playerPiece;
    } else if (this.state.gameDifficulty === "medium") {
      //Medium AI
    } else {
      // impossible AI
    }

    this.checkWin(false, board);
    this.setState({ boardStatus: board, computerMove: false });

    return;
  };

  playerMoved = (idx) => {
    if (
      this.state.computerMove ||
      this.state.gameStarted === false ||
      this.state.boardStatus[idx] !== null
    ) {
      return;
    }
    var board = this.state.boardStatus;
    board[idx] = this.state.playerPiece;

    var isGameOver = this.checkWin(true, board);
    this.setState({ boardStatus: board, computerMove: true });
    if (!isGameOver) {
      //Only let the computer move if we didnt already win
      this.computerMove();
    } else {
      // We won so reset the computerMove to false
      this.setState({ computerMove: false });
    }
  };

  renderBoard = () => {
    var rows = [1, 2, 3];
    var output = rows.map((val, idx) => {
      return <Row key={val + idx}>{this.renderRow(3 * idx)}</Row>;
    });
    return output;
  };

  resetBoard = () => {
    this.setState({
      boardStatus: [null, null, null, null, null, null, null, null, null],
    });
  };

  pickedDifficulty = (difficulty) => {
    this.setState({
      gameStarted: true,
      gameOver: false,
      gameDifficulty: difficulty,
    });
    this.resetBoard();
  };

  renderRow = (val) => {
    var arr = [1 + val, 2 + val, 3 + val];
    var output = arr.map((val, idx) => {
      return (
        <Col
          key={val + "Col"}
          width="33%"
          style={{ border: "solid", borderWidth: "10px" }}
        >
          <img
            type="image"
            src={
              this.state.boardStatus[val - 1] === null
                ? white
                : this.state.boardStatus[val - 1] === true
                ? xImage
                : oImage
            }
            key={val + "img"}
            width="70%"
            display="block"
            alt="tictactoebox"
            height="140vw"
            style={{ margin: "2vw" }}
            onClick={() => {
              this.playerMoved(val - 1);
            }}
          ></img>
        </Col>
      );
    });

    return output;
  };

  render() {
    return (
      <div>
        <Alert
          variant="success"
          style={{ display: this.state.gameOver ? "block" : "none" }}
        >
          <Button href="./Portfolio" style={{ float: "right" }}>
            Go Back
          </Button>
          <Alert.Heading>
            {this.state.playerWin == null
              ? "Welcome to TicTactToe! "
              : this.state.playerWin
              ? "Congratulations! You Won! "
              : "Sorry, you lost. "}
            Pick a difficulty?
          </Alert.Heading>
          <p>
            {" "}
            There are three different modes. The hardest uses minimax to always{" "}
            <br /> make an optimal move. Try it to test out the minimax
            algorithm, otherwise, <br />
            play easy/medium if you want a chance to win
          </p>
          <Row>
            <Col>
              <Button
                variant="success"
                onClick={() => {
                  this.pickedDifficulty("easy");
                }}
              >
                {" "}
                Easy{" "}
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => {
                  this.pickedDifficulty("medium");
                }}
              >
                {" "}
                Medium{" "}
              </Button>
            </Col>
            <Col>
              <Button
                variant="danger"
                onClick={() => {
                  this.pickedDifficulty("impossible");
                }}
              >
                {" "}
                Impossible{" "}
              </Button>
            </Col>
          </Row>
        </Alert>
        <Container>{this.renderBoard()}</Container>
        <br></br>
      </div>
    );
  }
}

export default TicTacToe;
