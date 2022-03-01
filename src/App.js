import React, { Component } from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeadNavBar from "./NavBar";
import IndexCarousel from "./HomeCarousel";
import IndexCards from "./IndexCards";
import Footer from "./Footer";
import Resume from "./Resume";
import Form from "./Form";
import Games from "./Games";
import Projects from "./Projects";
import Melitza from "./Melitza";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
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
          <Route path="/Projects">
            <Projects bgcolor="#f7e9c5"></Projects>
          </Route>
          <Route path="/Melitza">
            <Melitza bgcolor="#f7e9c5"></Melitza>
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
