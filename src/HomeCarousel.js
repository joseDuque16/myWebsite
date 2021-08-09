import Carousel from "react-bootstrap/Carousel";
import React from "react";
import mtFujiPic from "./Images/mtfuji2.jpg";
import barcelonaPic from "./Images/barcelona2.jpg";
import niagraPic from "./Images/niagra2.jpg";
import Button from "react-bootstrap/Button";
import "./Styles/HomeCarousel.scss";

const IndexCarousel = () => {
  return (
    <div>
      <Carousel height="50vh">
        <Carousel.Item interval={5000}>
          <img className="carouselImageLeft d-block w-100" src={niagraPic} alt="Third slide" />
          <Carousel.Caption>
            <div className="myCaption1">
              <h1 className="myCaptionHighlightText">About me,</h1>
              <div>
                <p>
                  {" "}
                  Senior Full Stack Developer. <b className="myCaptionHighlightText">Masters in Computer Engineering</b>. Specialized in <b className="myCaptionHighlightText">React</b>, <b className="myCaptionHighlightText">React Native</b>, <b className="myCaptionHighlightText">Node</b>, <b className="myCaptionHighlightText">Express</b>.
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
                Extensive knowledge of software development life cycle. Diverse experience across languages and frameworks.
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
