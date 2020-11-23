import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: props.showForm,
      name: "",
      email: "",
      subject: "",
      myInterval: "",
      message: "",
      showAlert: "none",
      emailMsg: "",
      apiResponse: { success: "default response" },
    };

    this.handleSubmission = this.handleSubmission.bind(this);
  }

  // Handlers for onChange
  myEmailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  myNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  mySubjectChangeHandler = (event) => {
    this.setState({ subject: event.target.value });
  };
  myMessageChangeHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmission = () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      window.alert("One or more sections incomplete");
      return false;
    } else if (this.state.email.search("@") == -1) {
      window.alert("Email requires '@'");
      return false;
    }
    this.setState({ showForm: false });
    this.asyncAPIEmail();
    const myRunningInterval = setInterval(this.showSpinner, 3000);
    this.setState({ myInterval: myRunningInterval });
  };

  showSpinner = () => {
    if (this.state.EmailMsg === "") {
      this.setState({
        showForm: true,
        emailMsg: this.state.apiResponse.success,
      });
    } else {
      if (this.state.showAlert === "none") {
        this.setState({
          showAlert: "block",
        });
      } else {
        clearInterval(this.state.myInterval);
        console.log("still running");
        this.setState({
          showForm: "false",
        });
      }
    }
  };

  async asyncAPIEmail() {
    // handles the fetch request and storing the fetch response back to the state
    var data = {
      name: this.state.name,
      from: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    const fetchEmail = await fetch("http://localhost:8080/email/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    const fetchEmailResponse = fetchEmail;

    if (fetchEmailResponse.success !== undefined) {
      this.setState({ apiResponse: fetchEmailResponse });
    } else {
      this.setState({
        apiResponse:
          "Sorry there was an error, please try emailing me directly at joseduquesoftware@gmail.com",
      });
    }
  }

  render() {
    const form = {
      width: "500px",
      minWidth: "50%",
      maxWidth: "100%",
      margin: "auto",
      display: this.state.showForm ? "block" : "none",
    };
    const div = {
      backgroundColor: "#f7e9c5",
    };
    const loading = {
      display: this.state.showForm ? "none" : "block",
    };
    const alert = {
      display: this.state.showAlert,
    };

    return (
      <div style={div}>
        <Alert
          style={alert}
          variant="success"
          onClose={() => this.setState({ showAlert: "none" })}
          dismissible
        >
          <Alert.Heading>
            Thank you {this.state.name} for reaching out!{" "}
          </Alert.Heading>
          <p>
            Your email has been sent and I will reach back to you at{" "}
            {this.state.email}
          </p>
        </Alert>
        <br></br>
        <div style={loading}>
          <br></br>
          <Spinner
            style={{ margin: "auto" }}
            animation="border"
            variant="primary"
          />
          <br></br>
          <h2> Sending Email ...</h2>
          <br></br>
        </div>

        <br></br>

        <div style={form}>
          <form name="contactMe">
            <label style={{ float: "left" }} for="name">
              {" "}
              Name :{" "}
            </label>{" "}
            <input
              type="text"
              size="40"
              style={{ float: "left", marginLeft: "10px" }}
              onChange={this.myNameChangeHandler}
              name="name"
              placeholder=""
            ></input>
            <br></br>
            <br></br>
            <label style={{ float: "left" }} for="email">
              {" "}
              From :{" "}
            </label>{" "}
            <input
              type="email"
              size="100"
              onChange={this.myEmailChangeHandler}
              name="email"
              placeholder="myEmail@company.com"
            ></input>
            <br></br>
            <br></br>
            <label style={{ float: "left" }} for="subject">
              {" "}
              Subject :{" "}
            </label>{" "}
            <input
              type="text"
              size="100"
              onChange={this.mySubjectChangeHandler}
              name="subject"
              placeholder="Hello Jose "
            ></input>
            <br></br>
            <br></br>
            <label style={{ float: "left" }} for="message">
              Message :{" "}
            </label>{" "}
            <br></br>
            <textarea
              name="message"
              rows="10"
              onChange={this.myMessageChangeHandler}
              cols="103"
              placeholder="*Insert message here*"
            ></textarea>
          </form>
          <br></br>

          <Button
            variant="success"
            style={{ width: "100%", margin: "auto" }}
            onClick={this.handleSubmission}
          >
            Send Message!
          </Button>
          <br></br>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Form;
