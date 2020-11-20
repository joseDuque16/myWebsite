import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";

class IndexCardLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: this.props.eventKey,
      value: this.props.p,
      select: this.props.select,
      textColorDefault: "white",
      selectTextColor: "black",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { select: props.select };
  }

  render = () => {
    const myStyle = {
      color: this.state.select
        ? this.state.selectTextColor
        : this.state.textColorDefault,
    };
    return (
      <Nav.Link eventKey={this.state.eventKey} style={myStyle}>
        {this.state.value}{" "}
      </Nav.Link>
    );
  };
}

export default IndexCardLink;
