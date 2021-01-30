import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import mtFujiPic from "./Images/mtfuji2.jpg";
import barcelonaPic from "./Images/barcelona2.jpg";
import niagraPic from "./Images/niagra2.jpg";
import Button from "react-bootstrap/Button";
import "./HomeCarousel.css";
import { useWindowSize } from "./useWindowSize";

function IndexCarousel() {
  const size = useWindowSize();

  return (
    <div>
      <Carousel height="50vh">
        <Carousel.Item interval={5000}>
          <img className="carouselImageLeft d-block w-100" src={niagraPic} alt="Third slide" />
          <Carousel.Caption>
            <div className="myCaption1">
              <h1>Welcome,</h1>
              <div>
                <p>
                  {" "}
                  I am a Senior Software Engineer interested in automation, artificial intelligence,
                  and maximizing user experiences. I also love traveling <span>&#128747;</span>
                </p>
                <Button className="carouselButtons" variant="primary">
                  <a href="#bottom" style={{ color: "white" }}>
                    {" "}
                    Learn More{" "}
                  </a>
                </Button>{" "}
                <Button className="carouselButtons" variant="warning">
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
          <img className="carouselImage d-block w-100" src={barcelonaPic} alt="Third slide" />
          <Carousel.Caption>
            <div className="myCaption2">
              <h1>Full Stack Developer</h1>
              <p>
                I have a masters in computer engineering as well as a diverse technical background
                at all stages of the software lifecycle
              </p>
              <Button href="/Portfolio" className="carouselButtons" variant="info">
                Interactive Portfolio
              </Button>{" "}
              <Button href="/Projects" className="carouselButtons" variant="success">
                Other Projects
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="carouselImage d-block w-100" src={mtFujiPic} alt="First slide" />
          <Carousel.Caption>
            <div className="myCaption3">
              <h1>Thanks for Visiting!</h1>
              <p>
                Please feel free to reach out on linkedIn or by clicking below. I am always looking
                forward to new and challenging opportunities.
              </p>
              <Button className="carouselButtons" variant="warning">
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

export default IndexCarousel;
