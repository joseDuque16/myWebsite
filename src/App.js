import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeadNavBar from "./NavBar";
import IndexCarousel from "./HomeCarousel";
import IndexCards from "./IndexCards";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <div>
          <HeadNavBar />
        </div>
        <div>
          <IndexCarousel />
        </div>
        <div>
          <IndexCards></IndexCards>
        </div>
        <br></br>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
