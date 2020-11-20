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
      fontSize: "1.2vw",
      padding: "1vw",
      fontFamily: "Arial",
      marginBottom: "1vw",
      width: "40vw",
      float: "right",
      textAlign: "left",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const h1Size = {
      fontSize: "2.4vw",
    };

    const myCaption3 = {
      color: "white",
      fontSize: "1.2vw",
      padding: "1vw",
      fontFamily: "Arial",
      marginBottom: "1vw",
      width: "40vw",
      float: "left",
      textAlign: "left",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const myCaption2 = {
      color: "white",
      padding: "1vw",
      fontFamily: "Arial",
      fontSize: "1.2vw",
      marginBottom: "1vw",
      margin: "auto",
      width: "40vw",
      borderRadius: "25px",
      border: "2px solid #96dcf8",
      background: "rgba(105, 147, 186, 0.3)",
    };

    const carouselButtons = {
      width: "auto",
      fontSize: "1.4vw",
    };

    const emoji = { fontSize: "1.4vw" };
    const carouselImg = { minHeight: "34vw" };

    return (
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            style={carouselImg}
            className="d-block w-100"
            src={niagraPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div style={myCaption1}>
              <h1 style={h1Size}>Welcome,</h1>
              <div>
                <p>
                  I am a Senior Software Engineer interested in automation,
                  artificial intelligence, and maximizing user experiences. I
                  also love traveling <span style={emoji}>&#128747;</span>
                </p>
                <Button style={carouselButtons} variant="primary">
                  Learn More
                </Button>{" "}
                <Button style={carouselButtons} variant="warning">
                  View Resume
                </Button>{" "}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            style={carouselImg}
            className="d-block w-100"
            src={barcelonaPic}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div style={myCaption2}>
              <h1 style={h1Size}>Full Stack Developer</h1>
              <p>
                I have a masters in computer engineering as well as a diverse
                technical background ranging from low level control systems
                testing to full stack application development
              </p>
              <Button style={carouselButtons} variant="primary">
                Interactive Portfolio
              </Button>{" "}
              <Button style={carouselButtons} variant="warning">
                Other Projects
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            style={carouselImg}
            className="d-block w-100"
            src={mtFujiPic}
            alt="First slide"
          />
          <Carousel.Caption>
            <div style={myCaption3}>
              <h1 style={h1Size}>Thanks for Visiting!</h1>
              <p>
                Please feel free to reach out on linkedIn or by clicking below.
                I am always looking forward to new and challenging
                opportunities.
              </p>
              <Button style={carouselButtons} variant="warning">
                Contact Me
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default IndexCarousel;
