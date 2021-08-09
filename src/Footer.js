import React, { Component } from "react";
import "./Styles/App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render() {
    const footerStyle = {
      paddingTop: "6px",
      background: "#484f57",
      color: "rgba(255,255,255,.5)",
    };

    const colLeft = {
      float: "left",
    };
    const colRight = {
      float: "right",
    };

    return (
      <footer style={footerStyle}>
        <Container>
          <Row md>
            <Col md>
              <p className="globalText">
                Built by <b>Jose Duque</b> | Developed using MERN stack | Hosted on AWS |{" "}
                <a href="#top">Back to top</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
