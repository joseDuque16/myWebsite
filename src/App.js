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
import Resume from "./Resume";
import Form from "./Form";
import Games from "./Games";

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
    //this.callAPI();
  }

  render() {
    const appContainer = {
      backgroundColor: "#343a40",
    };

    return (
      <div className="App" style={appContainer}>
        <HeadNavBar />
        <Router>
          <Route path="/" exact>
            <IndexCarousel />
            <IndexCards />
          </Route>
          <Route path="/Resume">
            <Resume bgcolor="#f7e9c5" />
          </Route>
          <Route path="/Contact">
            <Form showForm="true" />
          </Route>
          <Route path="/Portfolio">
            <Games bgcolor="#f7e9c5"></Games>
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
