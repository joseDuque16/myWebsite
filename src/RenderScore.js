import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { t_shape, L_shape, l_shape, square_shape, z_shape } from "./TetrisPieces";

function RenderScore(props) {
  const [score, setscore] = useState(props.score);
  const [color, setcolor] = useState(props.color);
  const [piece, setpiece] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  // Consider changing this to a non object so the update doesnt occur so often
  useEffect(() => {
    setscore(props.score);
    setcolor(props.color);
    var curPiece = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    for (var i = 0; i < props.pieceType["arr"].length; i++) {
      curPiece[props.pieceType["arr"][i][0]][props.pieceType["arr"][i][1] - 4] = props.color;
    }

    setpiece(curPiece);
  }, [props.shouldUpdate]);

  return (
    <div style={{ marginTop: "2em" }}>
      <Row>
        <h3>Score: {props.score}</h3>
      </Row>
      {RenderRow(piece)}
      <Row style={{ marginTop: "5em" }}>
        <h5>
          <u>Controls</u>
        </h5>
      </Row>
      <Row>
        <p>Space</p>
      </Row>
      <Row>
        <p>Left Arrow</p>
      </Row>
      <Row>
        <p>Right Arrow</p>
      </Row>
      <Row>
        <p>Down Arrow</p>
      </Row>
    </div>
  );
}

function RenderRow(arr) {
  const output = arr.map((val, idx, arr) => {
    return <Row style={{ height: "2em" }}>{RenderColumn(val)}</Row>;
  });

  return output;
}

function RenderColumn(arr) {
  const output = arr.map((val, idx, arr) => {
    return (
      <Col
        xs={1}
        style={{
          backgroundColor: val === null ? "#000033" : val,
          border: "solid",
          borderWidth: "1px",
          margin: "0px",
          borderColor: "white",
        }}
      ></Col>
    );
  });

  return output;
}

export default RenderScore;
