import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const form = {
      width: "500px",
      minWidth: "50%",
      maxWidth: "100%",
      margin: "auto",
    };
    const div = {
      backgroundColor: "#f7e9c5",
    };

    return (
      <div style={div}>
        <br></br>
        <div style={form}>
          <form name="contactMe" action="./" method="post">
            <label style={{ float: "left" }} for="subject">
              {" "}
              Subject :{" "}
            </label>{" "}
            <input type="text" size="100" placeholder="Hello Jose "></input>
            <br></br>
            <br></br>
            <label style={{ float: "left" }} for="message">
              Message :{" "}
            </label>{" "}
            <br></br>
            <textarea
              rows="10"
              cols="103"
              placeholder="*Insert message here*"
            ></textarea>
            <input type="submit" value="submit"></input>
          </form>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Form;
