import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import myLogo from "./Images/brandLogo.png";
import linkedin from "./Images/linkedin.png";
import github from "./Images/github.png";
import leetcode from "./Images/leetcode.png";

class HeadNavBar extends Component {
  render() {
    return (
      // Link to home with href
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          {" "}
          <img
            alt=""
            src={myLogo} // direct to my initial picture
            width="55"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Jose Duque
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/"> About Me </Nav.Link>
            <Nav.Link href="/Resume"> Resume </Nav.Link>
            <Nav.Link href="/Portfolio"> Portfolio </Nav.Link>
            <Nav.Link href="/Projects"> Projects </Nav.Link>
            <Nav.Link href="/Contact"> Contact Me </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Brand href="http://www.linkedin.com/in/jose-duque-engineer">
              {" "}
              <img
                alt=""
                src={linkedin} // direct to my initial picture
                width="110"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Brand href="http://github.com/joseDuque16">
              {" "}
              <img
                alt=""
                src={github} // direct to my initial picture
                width="80"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Brand href="http://leetcode.com/josepro98/">
              {" "}
              <img
                alt=""
                src={leetcode} // direct to my initial picture
                width="130"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeadNavBar;
