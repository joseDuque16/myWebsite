import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import red from "./red.jpg";
import blue from "./blue.jpg";
import gray from "./gray.jpg";
import { isWin, miniMaxAI } from "./ConnectFourAI";

class ConnectFour extends Component {
  constructor(props) {
    super(props);

    // ANCHOR state
    this.state = {
      playerPiece: true, //true is x, false is 0, null is empty
      gameOver: true,
      computerMove: false,
      gameDifficulty: "",
      numTurns: 0,
      midAnimation: null,
      animationInteval: null,
      inputButtonColors: [gray, gray, gray, gray, gray, gray, gray],
      gameStarted: false,
      playerWin: null, // true is player won, false is player lost, null is a draw
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
    };
  }

  // ANCHOR pickedDifficulty
  pickedDifficulty = (difficulty) => {
    this.setState({
      gameStarted: true,
      gameOver: false,
      gameDifficulty: difficulty,
    });
    this.resetBoard();
  };

  //ANCHOR ReactAI Makes a computer move based on the difficulty picked
  computerMove = () => {
    var curDiff = this.state.gameDifficulty;
    var myBoard = this.state.board;
    var numTurns = this.state.numTurns;
    var y;

    if (curDiff === "easy") {
      do {
        y = Math.round(Math.random() * 6);
        var validMove = this.makeMove(false, y, myBoard);
      } while (!validMove);
    } else if (curDiff === "medium") {
      let aiDifficulty = 4;
      y = miniMaxAI(myBoard, false, numTurns, aiDifficulty);
      this.makeMove(false, y, myBoard);
    } else if (curDiff === "hard") {
      let aiDifficulty = 8;
      y = miniMaxAI(myBoard, false, numTurns, aiDifficulty);
      this.makeMove(false, y, myBoard);
    }
    console.log("computer picked y : " + y);
  };

  // ANCHOR NodeAI - connect four using server calls
  async computerMoveServer() {
    let difficulty;
    if (this.gameDifficulty === "hard") {
      difficulty = 8;
    } else if (this.gameDifficulty === "medium") {
      difficulty = 5;
    } else {
      difficulty = 1;
    }

    var data = {
      board: this.state.board,
      numTurns: this.state.numTurns,
      searchDepth: difficulty,
    };

    await fetch("http://localhost:8080/connectFour/playerMoved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => this.makeMove(false, data.move, this.state.board));
  }

  // ANCHOR resetBoard
  resetBoard = () => {
    var clearBoard = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    this.setState({
      board: clearBoard,
      numTurns: 0,
      computerMove: false,
      gameStarted: true,
      playerWin: null,
      gameOver: false,
    });
  };

  // ANCHOR moveAnimation
  moveAnimation = () => {
    var curAnimationState = this.state.midAnimation;
    var prevPosition = this.state.prevPosition;

    if (curAnimationState === null) {
      return;
    }

    var myBoard = this.state.board;
    var curX = curAnimationState.x;
    var curY = curAnimationState.y;
    var playerPiece = curAnimationState.piece;
    var animationMoved = false;

    var i;
    for (i = curX; i < 6; i++) {
      if (myBoard[i][curY] === null) {
        animationMoved = true;
        myBoard[i][curY] = playerPiece;
        prevPosition = [i, curY];
        break;
      }
    }

    curAnimationState.x = i + 1;

    if (!animationMoved) {
      // final spot moved, can end the animation
      clearInterval(this.state.animationInteval);
      this.setState({ numTurns: this.state.numTurns + 1 });

      // The board is full and we have a draw
      if (this.state.numTurns === 42) {
        this.setState({
          board: myBoard,
          midAnimation: null,
          computerMove: false,
          gameOver: true,
          playerWin: null,
        });
        return;
      }

      // change to the next players turn
      if (this.state.computerMove === false) {
        // its time to change control to AI
        let output = isWin(myBoard, true, prevPosition); // Check if player won

        if (output === true) {
          this.setState({
            board: myBoard,
            midAnimation: null,
            computerMove: false,
            gameOver: true,
            playerWin: true,
          });
          return;
        } else {
          this.setState({ board: myBoard, midAnimation: null, computerMove: true });
          this.computerMove();
        }
      } else {
        // Its time to change control back to player
        let output = isWin(myBoard, false, prevPosition); // Check if ai won

        if (output === true) {
          this.setState({
            board: myBoard,
            midAnimation: null,
            computerMove: false,
            gameOver: true,
            playerWin: false,
          });
          return;
        } else {
          this.setState({ board: myBoard, midAnimation: null, computerMove: false });
        }
      }
    } else {
      // Animation is still in progress
      if (curX - 1 >= 0) {
        myBoard[curX - 1][curY] = null; // clear the previous chip
      }

      this.setState(function () {
        return {
          board: myBoard,
          midAnimation: curAnimationState,
          prevPosition: prevPosition,
        };
      });
    }
  };

  // ANCHOR: makeMove
  makeMove = (isPlayer, curY, myBoard) => {
    var playerPiece = isPlayer;
    var validMove;
    var i;
    var animate;

    for (i = 0; i < 6; i++) {
      if (myBoard[i][curY] === null) {
        animate = setInterval(this.moveAnimation, 100);
        this.setState({
          board: myBoard,
          animationInteval: animate,
          midAnimation: { x: i, y: curY, piece: playerPiece },
        });
        validMove = true;
        break;
      }
    }

    // return false if the current move is invalid
    if (!validMove) {
      return false;
    } else {
      return true;
    }
  };

  //ANCHOR: onPlayerMove
  onPlayerMove = (x, y) => {
    // break if the selected buttons are not the designated play buttons
    if (
      x !== 10 ||
      this.state.computerMove === true ||
      this.state.gameStarted === false ||
      this.state.midAnimation !== null
    ) {
      return;
    }
    var myBoard = this.state.board;

    // iterate through position y to see if a piece can be placed in this position
    var validMove = this.makeMove(true, y, myBoard);

    if (!validMove) {
      window.alert("Invalid Move. The Column is full. Pick a different Column");
      return;
    }

    console.log("player moved on position:" + y);
  };

  //ANCHOR hoverOveButton Change the color of the input buttons when the user hovers over them
  hoverOverButton = (val, idx, isMouseOver) => {
    if (val !== 10 || this.state.computerMove === true) {
      return;
    }

    var myColors = [gray, gray, gray, gray, gray, gray, gray];
    myColors[idx] = isMouseOver ? red : gray;
    this.setState(() => {
      return {
        inputButtonColors: myColors,
      };
    });
  };

  //ANCHOR connectFourRenderRow Render one row of the board
  connectFourRenderRow = (val) => {
    var row = [0, 1, 2, 3, 4, 5, 6];

    const imgStyle = {
      borderRadius: "50%",
    };

    var output = row.map((value, idx) => {
      return (
        <Col key={idx + " " + val + "Col"}>
          <div style={{ position: "relative", textAlign: "center", color: "black" }}>
            <img
              src={
                val === 10
                  ? this.state.inputButtonColors[idx]
                  : this.state.board[val][idx] === null
                  ? gray
                  : this.state.board[val][idx] === true
                  ? red
                  : blue
              }
              width="60em"
              height="60em"
              alt="chipSlot"
              onMouseOver={() => {
                this.hoverOverButton(val, idx, true);
              }}
              onMouseOut={() => {
                this.hoverOverButton(val, idx, false);
              }}
              onClick={() => {
                this.onPlayerMove(val, idx);
              }}
              style={imgStyle}
              key={idx + " " + val + "image"}
            ></img>
            <div
              style={{
                bottom: "20px",
                left: "1.2vw",
                visibility:
                  (val === 10 && this.state.inputButtonColors[idx]) === red ? "visible" : "hidden",
              }}
            >
              Input
            </div>
          </div>
        </Col>
      );
    });

    return output;
  };

  // Render the board by calling the render row 6 times + 1 for the input buttons
  connectFourRenderMap = () => {
    var arr = [0, 1, 2, 3, 4, 5];

    var output = arr.map((val, idx) => {
      return <Row key={idx + " Row"}>{this.connectFourRenderRow(val)}</Row>;
    });

    return output;
  };

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      The connect four game utilizes a minimax approach, like the tictactoe AI. However, the
      possible moves for connect four are 4,531,985,219,092 vs 255,168 in tictactoe. To make this AI
      computationally feasable on a browser, I utilized an alpha pruning approach to stop searching
      when any good move is found.
    </Tooltip>
  );

  render() {
    return (
      <div>
        <Button href="./Portfolio" style={{ float: "right" }}>
          Go Back
        </Button>
        <Alert
          variant={
            this.state.playerWin === null && this.state.gameStarted
              ? "warning"
              : this.state.playerWin === true
              ? "success "
              : this.state.playerWin === false
              ? "danger "
              : "primary "
          }
          style={{ display: this.state.gameOver ? "block" : "none" }}
        >
          <Alert.Heading>
            {this.state.playerWin === null && this.state.gameStarted
              ? "Its a Draw! "
              : this.state.playerWin === true
              ? "Congratulations! You Won! "
              : this.state.playerWin === false
              ? "Sorry, you lost. "
              : "Welcome to TicTactToe! "}
            Pick a difficulty?
          </Alert.Heading>
          <p>
            {" "}
            Select Easy for a random AI, Medium and Hard both utilize an combination of MinMax
            algorithm as well as a{" "}
            <OverlayTrigger
              placement="bottom"
              width="100%"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip}
            >
              <b>alpha-pruning optimization </b>
            </OverlayTrigger>
            approach. Medium limits the search depth to 4 moves ahead of player, hard to 6.
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
                  this.pickedDifficulty("hard");
                }}
              >
                {" "}
                Hard{" "}
              </Button>
            </Col>
          </Row>
        </Alert>
        <br></br>
        <div
          style={{
            width: "600px",
            minWidth: "70%",
            maxWidth: "94%",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          <br></br>
          <Container style={{ backgroundColor: "#fff9aa", padding: "1em", paddingBottom: "0em" }}>
            <Row> {this.connectFourRenderRow(10)}</Row>
          </Container>

          <hr style={{ margin: "0px" }}></hr>
          <Container style={{ backgroundColor: "#fff9aa" }}>
            <br></br>
            {this.connectFourRenderMap()}
          </Container>
        </div>
        <br></br>
      </div>
    );
  }
}

export default ConnectFour;
