import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export function RenderSudoku(props) {
  const [map, setmap] = useState(props.map);
  const [avatarPopoverSelect, setavatarPopoverSelect] = useState(null);

  useEffect(() => {
    setmap(props.map);
  }, [props.map, props.forceUpdate]);

  // Render the column of the sudoku map
  function RenderRow(arr) {
    let output = arr.map((val2, idx1, arr) => {
      return (
        <>
          {idx1 % 3 === 0 && idx1 > 2 ? (
            <hr
              style={{
                width: "95%",
                borderWidth: "1em",
                border: "solid",
                marginTop: "1px",
                marginBottom: "1px",
              }}
            />
          ) : (
            <></>
          )}
          <Row
            style={{
              width: "100%",
              margin: "auto",
            }}>
            {val2.map((val, idx2, arr) => {
              return (
                <Col
                  style={{
                    marginLeft: idx2 % 3 == 0 ? "0em" : "0em",
                    borderRight: idx2 % 3 == 2 ? "solid" : "none",
                    borderLeft: idx2 % 3 == 0 ? "solid" : "none",
                    borderWidth: ".2em",
                    padding: "0px",
                  }}>
                  <OverlayTrigger
                    trigger="click"
                    key="right"
                    placement="right"
                    rootClose
                    overlay={
                      <Popover
                        id={`popover-positioned-right`}
                        style={{
                          display: avatarPopoverSelect ? "block" : "none",
                          backgroundColor: "lightgray",
                        }}>
                        <Popover.Content>
                          <Row>
                            {["1", "2", "3"].map((popoverVal) => {
                              return (
                                <Col>
                                  <button
                                    style={{
                                      width: "35px",
                                      height: "35px",
                                    }}
                                    onClick={() => {
                                      props.setmap(idx1, idx2, popoverVal);
                                      setavatarPopoverSelect(false);
                                    }}>
                                    {popoverVal}
                                  </button>
                                </Col>
                              );
                            })}
                          </Row>
                          <Row>
                            {["4", "5", "6"].map((popoverVal) => {
                              return (
                                <Col>
                                  <button
                                    style={{
                                      width: "35px",
                                      height: "35px",
                                    }}
                                    onClick={() => {
                                      props.setmap(idx1, idx2, popoverVal);
                                      setavatarPopoverSelect(false);
                                    }}>
                                    {popoverVal}
                                  </button>
                                </Col>
                              );
                            })}
                          </Row>
                          <Row>
                            {["7", "8", "9"].map((popoverVal) => {
                              return (
                                <Col>
                                  <button
                                    style={{
                                      width: "35px",
                                      height: "35px",
                                    }}
                                    onClick={() => {
                                      props.setmap(idx1, idx2, popoverVal);
                                      setavatarPopoverSelect(false);
                                    }}>
                                    {popoverVal}
                                  </button>
                                </Col>
                              );
                            })}
                          </Row>
                          <Row>
                            <Col></Col>
                            <Col>
                              <button
                                style={{
                                  width: "35px",
                                  height: "35px",
                                }}
                                onClick={() => {
                                  props.setmap(idx1, idx2, "-");
                                  setavatarPopoverSelect(false);
                                }}>
                                -
                              </button>
                            </Col>
                            <Col></Col>
                          </Row>
                        </Popover.Content>
                      </Popover>
                    }>
                    <button
                      style={{ width: "100%", height: "100%" }}
                      onClick={() => setavatarPopoverSelect(true)}>
                      <h4>{val}</h4>
                    </button>
                  </OverlayTrigger>
                </Col>
              );
            })}
          </Row>
        </>
      );
    });

    return output;
  }

  return <>{map && RenderRow(map)}</>;
}
