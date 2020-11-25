import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import lightGreenField from "./lightGreenField.jpg";
import darkGreenField from "./darkGreenField.jpg";
import showSnake from "./showSnake.jpg";
import showApple from "./showApple.jpg";

class GamesSnake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snakeInitialized: false,
      appleInitialized: false,
      moveInterval: "",
      lastKeyDown: "ArrowLeft",
      snakePos: [],
      gameLoss: false,
      snakeSpeed: 200,
    };
    this.initializeMap = this.initializeMap.bind(this);
  }

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate() {
    if (this.state.map !== undefined && this.state.snakeInitialized === false) {
      this.initializeSnake();
      this.setState({ snakeInitialized: true });
    } else if (
      this.state.map !== undefined &&
      this.state.appleInitialized === false
    ) {
      this.createApple();
      this.setState({ appleInitialized: true });
    }
  }

  /*******************************************      
            INITIALIZE THE SNAKE MAP     
  *********************************************/
  initializeMap = () => {
    const newMap = [];
    var modifier = 0;
    for (var x = 0; x < 17; x++) {
      var arr = [];
      for (var y = 0; y < 17; y++) {
        arr.push({
          id: x + "," + y,
          containsApple: false,
          containsSnake: false,
          isDark: (y + modifier) % 2 === 0 ? "dark" : "light",
        });
      }
      modifier = (modifier + 1) % 2;

      newMap.push(arr);
    }
    console.log(newMap);
    this.setState({ map: newMap });
  };

  /*******************************************      
            INITIALIZE THE SNAKE     
  *********************************************/
  initializeSnake = () => {
    var getMap = this.state.map;
    var override = {
      containsApple: false,
      containsSnake: true,
    };
    var snakeArr = [[8, 8]];
    Object.assign(getMap[8][8], override);
    this.setState({ map: getMap, snakePos: snakeArr });
  };

  /*******************************************      
        MOVE SNAKE: - Interval function
  *********************************************/
  snakeMove = () => {
    var snakeArr = [...this.state.snakePos];
    var curPos = [...snakeArr[0]];
    this.setState({ lockInPos: this.state.lastKeyDown });

    /// Object map is used to determine if the next position overlaps with the body
    var snakeLookup = {};
    for (var snakeP of snakeArr) {
      var key = snakeP[0] + "," + snakeP[1];
      snakeLookup[key] = true;
    }

    if (this.state.gameLoss === true || curPos[0] === undefined) {
      return;
    }

    switch (this.state.lastKeyDown) {
      case "ArrowLeft":
        curPos[1]--;
        break;
      case "ArrowRight":
        curPos[1]++;
        break;
      case "ArrowDown":
        curPos[0]++;
        break;
      case "ArrowUp":
        curPos[0]--;
        break;
      default:
        break;
    }

    if (
      curPos[0] < 0 ||
      curPos[0] > 16 ||
      curPos[1] < 0 ||
      curPos[1] > 16 ||
      snakeLookup[curPos[0] + "," + curPos[1]]
    ) {
      this.gameLost();
      return;
    } else {
      if (
        curPos[0] == this.state.applePos[0] &&
        curPos[1] == this.state.applePos[1]
      ) {
        // Check if we just ate an apple
        this.setSnake(curPos);
        snakeArr.unshift(curPos);
        this.createApple();
      } else {
        var oldPos = snakeArr.pop();
        this.setSnake(curPos);
        this.clearSnake(oldPos);
        snakeArr.unshift(curPos);
      }
      this.setState({ snakePos: snakeArr });
    }
  };

  /*******************************************      
        KEY PRESS: - handles user key inputs
  *********************************************/
  keyPress = (evt) => {
    // Dont let the user move the opposite of current direction
    if (this.state.lockInPos == "ArrowLeft" && evt.key == "ArrowRight") {
      return;
    } else if (this.state.lockInPos == "ArrowRight" && evt.key == "ArrowLeft") {
      return;
    } else if (this.state.lockInPos == "ArrowUp" && evt.key == "ArrowDown") {
      return;
    } else if (this.state.lockInPos == "ArrowDown" && evt.key == "ArrowUp") {
      return;
    }

    if (this.state.moveInterval === "") {
      const snakeMoveInterval = setInterval(
        this.snakeMove,
        this.state.snakeSpeed
      );
      this.setState({ moveInterval: snakeMoveInterval });
    }
    if (
      evt.key === "ArrowLeft" ||
      evt.key === "ArrowRight" ||
      evt.key === "ArrowUp" ||
      evt.key === "ArrowDown"
    ) {
      this.setState({ lastKeyDown: evt.key });
    }
  };

  /*******************************************      
               SET SNAKE: -pass in a position [x,y]
  *********************************************/
  setSnake = (idx) => {
    var getMap = this.state.map;
    var override = {
      containsApple: false,
      containsSnake: true,
    };
    Object.assign(getMap[idx[0]][idx[1]], override);
    this.setState({ map: getMap });
  };

  /*******************************************      
               CLEAR SNAKE: -pass in a position [x,y]
  *********************************************/
  clearSnake = (idx) => {
    var getMap = this.state.map;
    var override = {
      containsApple: false,
      containsSnake: false,
    };
    Object.assign(getMap[idx[0]][idx[1]], override);
    this.setState({ map: getMap });
  };

  /*******************************************      
               CREATE APPLE
  *********************************************/
  createApple = () => {
    var getMap = this.state.map;
    var override = {
      containsApple: true,
      containsSnake: false,
    };

    var snakePositions = this.state.snakePos;
    var snakeLookup = {};

    for (var snakeP of snakePositions) {
      var key = snakeP[0] + "," + snakeP[1];
      snakeLookup[key] = true;
    }

    var possibleNewPost = "";
    var randX;
    var randY;
    do {
      var randX = Math.floor(Math.random() * 17);
      var randY = Math.floor(Math.random() * 17);
      possibleNewPost = randX + "," + randY;
    } while (snakeLookup[possibleNewPost]); // Repeat finding apple pos if it overlaps with snake

    Object.assign(getMap[randX][randY], override);
    this.setState({ map: getMap, applePos: [randX, randY] });
  };

  /*******************************************      
        GAME LOST: - Interval function
  *********************************************/
  gameLost = () => {
    this.setState({ gameLoss: true });
    clearInterval(this.state.moveInterval);
    this.setState({ score: this.state.snakePos.length });
  };

  /*******************************************      
               RESET GAME
  *********************************************/
  resetSnake = (newSpeed) => {
    var snake = this.state.snakePos;

    for (var pos of snake) {
      this.clearSnake(pos);
    }
    this.initializeSnake();
    this.setState({ moveInterval: "", gameLoss: false, snakeSpeed: newSpeed });
  };

  /*******************************************      
               RENDER ROW
  *********************************************/
  renderRow = (row) => {
    var curRow = this.state.map[row];
    var output = curRow.map((value, index) => {
      return (
        <Col
          md="auto"
          style={{
            margin: "0px",
            padding: "0px",
            height: "2.15vw",
            width: "5.88%",
          }}
        >
          <img
            style={{
              margin: "0px",
              padding: "0px",
              border: "none",
              borderSpacing: "0px",
            }}
            alt="floor"
            src={
              this.state.map[row][index].containsApple === true
                ? showApple
                : this.state.map[row][index].containsSnake === true
                ? showSnake
                : this.state.map[row][index].isDark === "dark"
                ? lightGreenField
                : darkGreenField
            } // Change this to depend on the state.apple vs snake
            height="100%"
            width="100%"
          ></img>
        </Col>
      );
    });
    return output;
  };

  /*******************************************      
               RENDER Full Map
  *********************************************/
  renderMap = () => {
    if (this.state.map === undefined) {
      return <h1>map not loaded</h1>;
    }
    var rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var output = rows.map((val, idx) => {
      return <Row>{this.renderRow(val)}</Row>;
    });
    return output;
  };

  render() {
    return (
      <div
        onKeyDown={(evt) => {
          this.keyPress(evt);
        }}
        tabIndex="0"
      >
        <Button href="./Portfolio" style={{ float: "right" }}>
          Go Back
        </Button>
        <Alert
          variant="danger"
          style={{ display: this.state.gameLoss ? "block" : "none" }}
        >
          <Alert.Heading>
            Congratulations! Your score was : <b> {this.state.score}</b>{" "}
            <br></br> Pick a new difficulty?
          </Alert.Heading>
          <Row>
            <Col>
              <Button
                variant="success"
                onClick={() => {
                  this.resetSnake(200);
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
                  this.resetSnake(150);
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
                  this.resetSnake(100);
                }}
              >
                {" "}
                Hard{" "}
              </Button>
            </Col>
          </Row>
        </Alert>
        <Container
          style={{
            margin: "auto",
            verticalAlign: "middle",
            paddingTop: "18px",
            width: "70%",
          }}
        >
          {this.renderMap()}
        </Container>
        <br></br>
      </div>
    );
  }
}
//
export default GamesSnake;
