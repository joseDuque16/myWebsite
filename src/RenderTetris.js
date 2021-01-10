import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RenderTetris(props) {
  const [TetrisMap, setTetrisMap] = useState(props.map["arr"]);

  useEffect(() => {
    if (props.piece["arr"] !== null && props.map["arr"] !== null) {
      var piecePos = props.piece["arr"];
      var propsMap = props.map["arr"];
      var mapClone = [];

      for (let i = 0; i < propsMap.length; i++) {
        let row = [];
        for (var x = 0; x < propsMap[i].length; x++) {
          row.push(propsMap[i][x]);
        }
        mapClone.push(row);
      }

      for (var i = 0; i < piecePos.length; i++) {
        mapClone[piecePos[i][0]][piecePos[i][1]] = props.color;
      }
      setTetrisMap(mapClone);
    }
  }, [props.map, props.piece, props.color]);

  function RenderRow(arr) {
    const output = arr.map((val, idx, arr) => {
      return <Row style={{ margin: "0px", height: "2em" }}>{RenderColumn(arr[idx])}</Row>;
    });

    return output;
  }

  function RenderColumn(arr) {
    const output = arr.map((val, idx, arr) => {
      return (
        <Col
          sm
          style={{
            backgroundColor: val,
            border: "solid",
            borderWidth: "1px",
            margin: "0px",
            paddingLeft: "0px",
            borderColor: "white",
          }}
        ></Col>
      );
    });

    return output;
  }

  return <div>{RenderRow(TetrisMap)}</div>;
}

export default RenderTetris;
