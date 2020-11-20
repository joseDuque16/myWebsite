import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import mtFujiPic from "./mtfuji2.jpg";
import barcelonaPic from "./barcelona2.jpg";
import niagraPic from "./niagra2.jpg";
import Button from "react-bootstrap/Button";

class IndexCarousel extends Component {
  render() {
    const myCaption1 = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial",
      marginBottom: "6%",
      width: "60%",
      float: "right",
      textAlign: "left",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const myCaption3 = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial",
      marginBottom: "6%",
      width: "50%",
      float: "left",
      textAlign: "left",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const myCaption2 = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial",
      marginBottom: "6%",
      margin: "auto",
      width: "60%",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const emoji = { fontSize: "30px" };

    return (
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={niagraPic} alt="Third slide" />
          <Carousel.Caption>
            <div style={myCaption1}>
              <h1>Welcome,</h1>
              <div>
                <p>
                  I am a Senior Software Engineer interested in automation,
                  artificial intelligence, and maximizing user experiences. I
                  also love traveling <span style={emoji}>&#128747;</span>
                </p>
                <Button variant="primary">Learn More</Button>{" "}
                <Button variant="warning">View Resume</Button>{" "}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={barcelonaPic} alt="Third slide" />
          <Carousel.Caption>
            <div style={myCaption2}>
              <h3>Full Stack Developer</h3>
              <p>
                I have a masters in computer engineering as well as a diverse
                technical background ranging from low level control systems
                testing to full stack application development
              </p>
              <Button variant="primary">Interactive Portfolio</Button>{" "}
              <Button variant="warning">Other Projects</Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={mtFujiPic} alt="First slide" />
          <Carousel.Caption>
            <div style={myCaption3}>
              <h3>Thanks for Visiting!</h3>
              <p>
                Please feel free to reach out on linkedIn or by clicking below.
                I am always looking for new challenging opportunities.
              </p>
              <Button variant="warning">Contact Me</Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default IndexCarousel;
