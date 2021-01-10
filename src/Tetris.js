import React, { useState, useEffect } from "react";
import RenderTetris from "./RenderTetris";
import RenderScore from "./RenderScore";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import { t_shape, L_shape, l_shape, square_shape, z_shape } from "./TetrisPieces";
const pieceColors = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"];
const pieces = [t_shape, L_shape, l_shape, square_shape, z_shape];

function Tetris(props) {
  const [TetrisMap, setTetrisMap] = useState(null);
  const [curPiece, setCurPiece] = useState(null);
  const [gameStatus, setgameStatus] = useState(false);
  const [loadGame, setloadGame] = useState(false);
  const [moveReady, setmoveReady] = useState(false);
  const [timer, settimer] = useState(null);
  const [score, setscore] = useState(0);
  const [pieceType, setpieceType] = useState(null);
  const [userInput, setuserInput] = useState(null);
  const [curPieceColor, setCurPieceColor] = useState(0);
  const [shouldUpdate, setshouldUpdate] = useState(false);
  const [nextPiece, setnextPiece] = useState(JSON.parse(JSON.stringify(pieces[Math.ceil(Math.random() * 5 - 1)])));

  /********************************************************************** */
  //               Reset the game map
  /********************************************************************** */
  const resetGame = () => {
    var matrix = [];

    for (var x = 0; x < 20; x++) {
      var row = [];
      for (var y = 0; y < 11; y++) {
        row.push(null);
      }
      matrix.push(row);
    }

    setTetrisMap(matrix);
  };

  /********************************************************************** */
  //               Initialize the game
  /********************************************************************** */
  useEffect(() => {
    setgameStatus("ready");
    resetGame();

    return () => {
      console.log("clearing timer");
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (loadGame === true) {
      console.log("initializing game ---- ");
      console.log("setting timer");
      createPiece();
      settimer(setTimeout(moveNext, 400));
    }
  }, [loadGame]);

  /********************************************************************** */
  //               NEXT MOVE - keep moving the shapes down
  /********************************************************************** */
  useEffect(() => {
    if (moveReady && gameStatus === "ready") {
      var nextPos = [...curPiece];
      var reachedBottom = false;

      if (curPiece === null) {
        return;
      }

      // check if any of the values of the nextPos overlaps a currently set piece
      for (var i = 0; i < nextPos.length; i++) {
        if (nextPos[i][0] + 1 < 20 && TetrisMap[nextPos[i][0] + 1][nextPos[i][1]] !== null) {
          setmoveReady(false);
          clearTimeout(timer);
          freezePiece(nextPos);
          return;
        }
      }

      for (var i = 0; i < nextPos.length; i++) {
        if (nextPos[i][0] + 1 > 19) {
          reachedBottom = true;
          nextPos = curPiece;
          break;
        }
      }

      // reached the bottom so freeze the piece
      if (reachedBottom) {
        setmoveReady(false);
        clearTimeout(timer);
        freezePiece(nextPos);
        return;
      }

      // move each square on every piece one position downward
      for (var i = 0; i < nextPos.length; i++) {
        // check if we hit the bottom
        nextPos[i][0]++;
      }
      setCurPiece(nextPos);
    }

    return () => {
      setmoveReady(false);
    };
  }, [moveReady, loadGame]);

  function moveNext() {
    clearTimeout(timer);
    settimer(setTimeout(moveNext, 1300));
    setmoveReady(true);
  }

  /********************************************************************** */
  //      CAPTURE USER MOVE - Determine what the user wants and do it
  /********************************************************************** */

  useEffect(() => {
    var moveLeft = false;
    var moveRight = false;
    var moveDown = false;

    if (userInput === "ArrowLeft") {
      moveLeft = true;
    } else if (userInput === "ArrowRight") {
      moveRight = true;
    } else if (userInput === "ArrowDown") {
      moveDown = true;
    } else if (userInput === " ") {
      rotatePiece();
      return;
    } else {
      return;
    }

    var boundaryFail = false;
    let nextPos = JSON.parse(JSON.stringify(curPiece));

    for (var i = 0; i < nextPos.length; i++) {
      // Dont accept moves if at the bottom
      if (nextPos[i][0] >= 20) {
        boundaryFail = true;
        break;
      }

      // User wants to move the piece left
      if (moveLeft) {
        nextPos[i][1]--;
        if (nextPos[i][1] < 0 || TetrisMap[nextPos[i][0]][nextPos[i][1]] !== null) {
          boundaryFail = true;
          break;
        }
        continue;
      }

      // User wants to move the piece right
      if (moveRight) {
        nextPos[i][1]++;
        if (nextPos[i][1] > 10 || TetrisMap[nextPos[i][0]][nextPos[i][1]] !== null) {
          boundaryFail = true;
          break;
        }
        continue;
      }

      if (moveDown) {
        if (nextPos[i][0] + 1 >= 19) {
          boundaryFail = true;
          break;
        }
        nextPos[i][0] += 1;

        if (TetrisMap[nextPos[i][0]][nextPos[i][1]] !== null) {
          boundaryFail = true;
          break;
        }
      }
    }

    if (boundaryFail) {
      return;
    }

    setuserInput(null);
    setCurPiece(nextPos);
  }, [curPiece, userInput]);

  const userMove = (evt) => {
    setuserInput(evt.key);
  };

  /********************************************************************** */
  //          FREEZE PIECE - piece touched a segment. Lock it in place
  /********************************************************************** */
  const freezePiece = (curPos) => {
    var curMap = TetrisMap;

    for (var i = 0; i < curPos.length; i++) {
      curMap[curPos[i][0]][curPos[i][1]] = pieceColors[curPieceColor];
    }

    checkFullLines(curMap);
    createPiece();
    settimer(setTimeout(moveNext, 1300));
  };

  /********************************************************************** */
  //          checkFullLines - check if the user filled lines
  /********************************************************************** */
  const checkFullLines = (curMap) => {
    let removeLines = [];

    // identify which lines can be broken
    for (var i = 0; i < curMap.length; i++) {
      let isFull = true;
      for (var y = 0; y < curMap[i].length; y++) {
        if (curMap[i][y] === null) {
          isFull = false;
          break;
        }
      }
      if (isFull) {
        removeLines.push(i);
      }
    }

    setscore(score + removeLines.length * 100);

    for (var x of removeLines) {
      curMap.splice(x, 1);
      curMap.unshift([null, null, null, null, null, null, null, null, null, null, null]);
    }

    setTetrisMap(curMap);
  };

  /********************************************************************** */
  //          ROTATE PIECE - rotate the piece
  /********************************************************************** */
  const rotatePiece = () => {
    let nextPos = JSON.parse(JSON.stringify(curPiece));
    let rotatePoint = nextPos[0];

    // Rotate the pieces around the focal point by subtracting focal point from all points
    // and then flipping the x and y and negating the new y pos. Then add focal point values again
    for (var i = 1; i < nextPos.length; i++) {
      let x = nextPos[i][0] - rotatePoint[0];
      let y = nextPos[i][1] - rotatePoint[1];
      let newX = y + rotatePoint[0];
      let newY = -x + rotatePoint[1];
      nextPos[i][0] = newX;
      nextPos[i][1] = newY;

      if (nextPos[i][0] >= 19 || nextPos[i][0] < 0 || nextPos[i][1] < 0 || nextPos[i][1] > 10) {
        setuserInput(null);
        return;
      }
    }

    setuserInput(null);
    setCurPiece(nextPos);
    return;
  };

  /********************************************************************** */
  //          CREATE PIECE - Initialize a new piece
  /********************************************************************** */
  const createPiece = () => {
    let pick = pieces[Math.ceil(Math.random() * 5 - 1)];
    setshouldUpdate(!shouldUpdate);
    setCurPiece(nextPiece);
    setnextPiece(JSON.parse(JSON.stringify(pick)));
    setpieceType(pick);
    setCurPieceColor((curPieceColor + 1) % pieceColors.length);
    return;
  };

  return (
    <div
      onClick={() => setloadGame(true)}
      onKeyDown={(evt) => {
        userMove(evt);
      }}
      tabIndex="0"
    >
      <Row>
        <Col xs={6} style={{ marginLeft: "20%" }}>
          <div style={{ width: "80%", margin: "auto", backgroundColor: "#000033", marginTop: "5px" }}>
            {TetrisMap && (
              <RenderTetris
                map={{ arr: TetrisMap }}
                piece={{ arr: curPiece }}
                color={pieceColors[curPieceColor]}
              ></RenderTetris>
            )}
          </div>
        </Col>
        <Col xs>
          <div>
            {pieceType && (
              <RenderScore
                pieceType={{ arr: pieceType }}
                color={pieceColors[(curPieceColor + 1) % pieceColors.length]}
                score={score}
                shouldUpdate={shouldUpdate}
              ></RenderScore>
            )}
          </div>
        </Col>
      </Row>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          top: "40%",
          right: "0",
          left: "0",
          margin: "auto",
          width: "70%",
          display: loadGame ? "none" : "block",
        }}
      >
        <Alert variant="primary">
          <Alert.Heading>Click the field to start!</Alert.Heading>
        </Alert>
      </div>
    </div>
  );
}

export default Tetris;
