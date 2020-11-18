import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChessPiece from "./chessPiece";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("duque-node.us-east-2.elasticbeanstalk.com/testAPI")
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
        <header className="App-header">
          <h1> yoo wtf</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <ChessPiece />
          <Route path="/yo" component={ChessPiece} />
          <Route path="/yo" component={ChessPiece} />
        </Router>
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
