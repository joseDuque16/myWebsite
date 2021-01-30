import React, { useState, useEffect } from "react";
import { RenderSudoku } from "./RenderSudoku";
import { solveSudoku } from "./SudokuLogic";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { easyGames, mediumGames, hardGames } from "./SudokuStartingStates";

function Sudoku(props) {
  const [map, setmap] = useState(null);
  const [gameOption, setgameOption] = useState(null);
  const [difficulty, setdifficulty] = useState(null);
  const [forceUpdate, setforceUpdate] = useState(1);
  const clearBoard = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ];

  useEffect(() => {
    setmap(JSON.parse(JSON.stringify(clearBoard)));
  }, []);

  function goBack() {
    setgameOption(null);
    setdifficulty(null);
  }

  // Insert a value to the sudoku board
  function pickValue(row, col, val) {
    map[row][col] = val;
    setmap(map);
  }

  // Submit a sudoku puzzle for review
  function submitSolution(checkDontSolve) {
    // Step 1 - if user wants a solution, check that min number of moves is met
    if (checkDontSolve === false) {
      let count = 0;

      for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
          if (map[x][y] !== "-") {
            count++;
          }
        }
      }

      if (count < 17) {
        window.alert("Sorry, you need a minimum of 17 moves to properly solve a sudoku puzzle.");
        return;
      }
    }

    let output = solveSudoku(map, checkDontSolve);
    if (output === true && checkDontSolve === true) {
      window.alert("The solution is correct!");
    } else if (output === false && checkDontSolve === true) {
      window.alert("Solution is incorrect!");
    }

    if (checkDontSolve === false && output !== null) {
      window.alert("sudoku solved!");
      solveBoard(output);
      console.log(output);
    } else if (checkDontSolve === false && output == null) {
      window.alert("error finding solution");
    }
  }

  function solveBoard(output) {
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++) {
        pickValue(x, y, output[x][y]);
      }
    }
    setforceUpdate((prev) => prev + 1);
  }

  // Select a difficulty to play
  function pickDifficulty(val) {
    setdifficulty(val);
    if (val === "easy") {
      setmap(easyGames[Math.round(Math.random()) * 2]);
    } else if (val === "medium") {
      setmap(mediumGames[Math.round(Math.random()) * 2]);
    } else if (val === "hard") {
      setmap(hardGames[Math.round(Math.random()) * 2]);
    }
  }

  return (
    <Container>
      <Row>
        {(gameOption !== "play" || difficulty === null) && gameOption !== "solve" && (
          <Alert variant="info" style={{ width: "100%" }}>
            {gameOption === "play" && difficulty === null && (
              <>
                <Alert.Heading>Pick a difficulty to play</Alert.Heading>
                <Row>
                  <Col>
                    <Button
                      variant="success"
                      onClick={() => {
                        pickDifficulty("easy");
                      }}>
                      Easy
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="warning"
                      onClick={() => {
                        pickDifficulty("medium");
                      }}>
                      Medium
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      onClick={() => {
                        pickDifficulty("hard");
                      }}>
                      Hard
                    </Button>
                  </Col>
                </Row>
              </>
            )}
            {gameOption === null && (
              <>
                <Alert.Heading>
                  Play Sudoku or insert your own sudoku puzzle to find a solution:
                </Alert.Heading>
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        setgameOption("play");
                      }}>
                      Play Sudoku
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => {
                        setgameOption("solve");
                      }}>
                      Solve Sudoku
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setmap(JSON.parse(JSON.stringify(clearBoard)));
                      }}>
                      Clear Board
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Alert>
        )}
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={7} style={{ backgroundColor: "black", margin: "auto" }}>
          <div
            style={{
              border: "solid",
              borderWidth: "2px",
              width: "100%",
              paddingTop: "4px",
              paddingBottom: "4px",
              float: "right",
            }}>
            {map && (
              <RenderSudoku map={map} setmap={pickValue} forceUpdate={forceUpdate}></RenderSudoku>
            )}
          </div>
        </Col>
        {gameOption === "play" && difficulty && (
          <Col xs={3}>
            <Row className="justify-content-md-end">
              <Button onClick={() => goBack()} style={{ float: "right" }}>
                Go Back
              </Button>
            </Row>
            <Row className="justify-content-md-start">
              <Button
                style={{ marginTop: "5em", marginBottom: "5em" }}
                variant="success"
                onClick={() => {
                  submitSolution(true);
                }}>
                Submit Solution
              </Button>
            </Row>{" "}
            <Row className="justify-content-md-start">
              <Button
                variant="warning"
                onClick={() => {
                  pickDifficulty(difficulty);
                }}>
                Different Puzzle
              </Button>
            </Row>
          </Col>
        )}
        {gameOption === "solve" && (
          <Col xs={3}>
            <Row className="justify-content-md-end">
              <Button onClick={() => goBack()} style={{ float: "right" }}>
                Go Back
              </Button>
            </Row>
            <Row className="justify-content-md-start">
              <Button
                style={{ marginTop: "5em", marginBottom: "5em" }}
                variant="success"
                onClick={() => {
                  submitSolution(false);
                }}>
                Find Solution
              </Button>
            </Row>{" "}
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Sudoku;
