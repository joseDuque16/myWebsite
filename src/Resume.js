import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDoc: "View Transcript",
      currentDocLink:
        "https://mywebsitejoseduque.s3.us-east-2.amazonaws.com/JoseduqueWebsiteResume.pdf",
      bgcolor: props.bgcolor,
    };
  }

  changeDocument = () => {
    const documents = [
      "https://mywebsitejoseduque.s3.us-east-2.amazonaws.com/JoseduqueWebsiteResume.pdf",
      "https://mywebsitejoseduque.s3.us-east-2.amazonaws.com/transcript+graduate+Redacted.pdf",
    ];

    document.cookie = `referral_key=hello;max-age=604800;domain=example.com`;
    const text = ["View Resume", "View Transcript"];

    if (this.state.currentDoc == "View Resume") {
      this.setState({
        currentDoc: text[1],
        currentDocLink: documents[0],
      });
    } else {
      this.setState({
        currentDoc: text[0],
        currentDocLink: documents[1],
      });
    }
  };

  render() {
    const downloadButtons = {
      fontSize: "1.4vw",
      insentTop: "0dp",
      insentBottom: "0dp",
      marginTop: "2vw",
      marginBottom: "2vw",
      margin: "1vw",
      div: "clear",
    };

    const iframe = {
      minWidth: "80%",
      maxWidth: "100%",
    };

    const hr = {
      margin: "3px",
      width: "100%",
    };

    const div = {
      backgroundColor: this.state.bgcolor,
    };

    return (
      <div style={div}>
        <Button style={downloadButtons} variant="outline-primary" download>
          <Link to="/JoseduqueWebsiteResume.pdf" target="_blank" download>
            Download pdf
          </Link>
        </Button>
        <Button style={downloadButtons} variant="outline-primary">
          <Link to="/JoseduqueWebsiteResume.docx" target="_blank" download>
            Download docx
          </Link>
        </Button>
        <Button
          style={downloadButtons}
          variant="success"
          onClick={this.changeDocument}
        >
          {" "}
          {this.state.currentDoc}{" "}
        </Button>
        <hr style={hr}></hr>
        <iframe
          width="950px"
          style={iframe}
          title={this.state.currentDoc}
          src={this.state.currentDocLink}
          height="1200px"
        ></iframe>
        <hr style={hr}></hr>
      </div>
    );
  }
}

export default Resume;
