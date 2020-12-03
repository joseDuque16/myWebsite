import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import mtFujiPic from "./mtfuji2.jpg";
import barcelonaPic from "./barcelona2.jpg";
import niagraPic from "./niagra2.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class IndexCarousel extends Component {
  render() {
    const myCaption1 = {
      color: "white",
      minHeight: "2px",
      fontSize: "1.2vw",
      padding: ".4vw",
      paddingTop: ".8em",
      paddingBottom: "4vw",
      margin: "auto",
      fontFamily: "Arial",
      marginBottom: "4vw",
      width: "600px",
      minWidth: "50%",
      maxWidth: "80%",
      float: "right",
      textAlign: "left",
      //borderRadius: "25px",
      //border: "2px solid #96dcf8",
      //background: "rgba(105, 147, 186, 0.3)",
    };

    const myCaption2 = {
      color: "white",
      padding: ".4vw",
      paddingTop: ".8vw",
      paddingBottom: ".8vw",
      fontFamily: "Arial",
      fontSize: "1.2vw",
      marginBottom: "1vw",
      width: "700px",
      margin: "auto",
      minWidth: "40%",
      maxWidth: "100%",
      //borderRadius: "25px",
      //border: "2px solid #96dcf8",
      //background: "rgba(105, 147, 186, 0.3)",
    };

    const myCaption3 = {
      color: "white",
      fontSize: "1.2vw",
      padding: ".4vw",
      paddingTop: ".8vw",
      paddingBottom: ".8vw",
      fontFamily: "Arial",
      marginBottom: "1vw",
      margin: "auto",
      width: "580px",
      minWidth: "40%",
      maxWidth: "80%",
      float: "left",
      textAlign: "left",
      //borderRadius: "25px",
      //border: "2px solid #96dcf8",
      //background: "rgba(105, 147, 186, 0.3)",
    };

    const h1Size = {
      fontSize: "2.0vw",
    };

    const pSize = {
      fontSize: "1.2em",
    };

    const carouselButtons = {
      fontSize: "1.4vw",
      insentTop: "0dp",
      insentBottom: "0dp",
      marginLeft: "1vw",
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "10px",
      paddingRight: "10px",
      borderColor: "lightblue",
      div: "clear",
    };

    const emoji = { fontSize: "1.4vw" };
    const carouselImg = { height: "34vw" };

    return (
      <div>
        <Carousel height="50vh">
          <Carousel.Item interval={5000}>
            <img style={carouselImg} className="d-block w-100" src={niagraPic} alt="Third slide" />
            <Carousel.Caption>
              <div style={myCaption1}>
                <h1 style={h1Size}>Welcome,</h1>
                <div>
                  <p style={pSize}>
                    {" "}
                    I am a Senior Software Engineer interested in automation, artificial
                    intelligence, and maximizing user experiences. I also love traveling{" "}
                    <span style={emoji}>&#128747;</span>
                  </p>
                  <Button style={carouselButtons} variant="primary">
                    <a href="#bottom" style={{ color: "white" }}>
                      {" "}
                      Learn More{" "}
                    </a>
                  </Button>{" "}
                  <Button style={carouselButtons} variant="warning">
                    <a href="/Resume" style={{ color: "black" }}>
                      {" "}
                      View Resume{" "}
                    </a>
                  </Button>
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
                <p style={pSize}>
                  I have a masters in computer engineering as well as a diverse technical background
                  ranging from low level control systems testing to full stack application
                  development
                </p>
                <Button href="/Portfolio" style={carouselButtons} variant="info">
                  Interactive Portfolio
                </Button>{" "}
                <Button href="/OtherProjects" style={carouselButtons} variant="success">
                  Other Projects
                </Button>{" "}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img style={carouselImg} className="d-block w-100" src={mtFujiPic} alt="First slide" />
            <Carousel.Caption>
              <div style={myCaption3}>
                <h1 style={h1Size}>Thanks for Visiting!</h1>
                <p style={pSize}>
                  Please feel free to reach out on linkedIn or by clicking below. I am always
                  looking forward to new and challenging opportunities.
                </p>
                <Button style={carouselButtons} variant="warning">
                  <a href="/Contact" style={{ color: "black" }}>
                    {" "}
                    Contact Me{" "}
                  </a>
                </Button>{" "}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div id="bottom"></div>
      </div>
    );
  }
}

export default IndexCarousel;
