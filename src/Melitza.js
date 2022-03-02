import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hiking from "./Images/hiking.jpg";
import train from "./Images/train.jpg";
import hill from "./Images/hill.jpg";
import regret from "./Images/regret.jpg";
import together from "./Images/together.jpg";
import another from "./Images/another.jpg";
import truth from "./Images/truth.jpg";
import Container from "react-bootstrap/Container";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { bgcolor: props.bgcolor };
  }

  createProject = (props) => {
    return (
      <div
        style={{
          padding: " 0vw 1vw 0vw 0vw",
        }}
      >
        <Row
          style={{
            borderRadius: "20px",
            backgroundColor: "#b3eeff",
            borderWidth: "3px",
            borderColor: "black",
            border: "solid",
          }}
        >
          <Col>
            <div style={{ textAlign: "left", paddingTop: "20px" }}>
              <div>
                <h1>
                  {" "}
                  {props.title} <sup style={{ color: "blue" }}>{props.qualifier}</sup>{" "}
                </h1>
                <hr></hr>
              </div>
              <div>
                <img
                  alt="project text"
                  src={props.image}
                  style={{
                    width: "300px",
                    height: "200px",
                    display: "inline",
                    float: "right",
                  }}
                ></img>
                <br></br>
                <br></br>
                <p> {props.text} </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.bgcolor, width: "100%" }}>
        <Container fluid style={{ padding: "0px", margin: "0px", width: "80%", margin: "auto" }}>
          <Row>
            <Col style={{ padding: "0px" }}>
              <div style={{ width: "100%" }}>
                <br></br>
                <h1>From Jose to Melitza: </h1>
                <br></br>
                <this.createProject
                  left="true"
                  qualifier=""
                  title="Meli..."
                  image={hiking}
                  text="I came to spain last August in the months after having finally concluded a five year relationship. 
                  I was deeply unhappy with myself and with my life and was seeking a fresh start. To find the happiness 
                  i did not think was possible after so many years. I made several friends and began the process of healing and
                  of growing. In that process i saw the beauty of self love and of friendship. It was through that friendship that
                  I met you. The first time i saw you i did not think much except that you had a great energy and beautiful eyes.
                  Even though i knew i would inevitably have to leave to the US i asked Kati to introduce us. That first day in the club
                  and our second date at the 'best pasta in madrid' that i promised you were unforgettable. And every date after i knew
                  that you and I were compatible and had chemistry. I loved how witty you were, how quirky and playful you were,
                  your smile and your english-colombian accent. At the time I did not think i wanted a long term relationship since 
                  the last one had scarred me, but after our hiking date I was covinced that I wanted to continue see you
                  despite the long distance."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="false"
                  title="Return to reality"
                  image={train}
                  qualifier=""
                  text="The last month i was with you i was riding high. You taught me that i could love again and that i did not have
                  issues with commitment. That I had found somebody truly compatible who i could be myself around. But seeing that reality
                  in mallorca and then realizing it would all come to an end and that the cycle of saying goodbye would have to repeat over and over because
                  I did not have permission to stay in the EU long term made me pensive and quiet. I tried to talk myself into thinking
                  that our relationship would survive and that we loved each other enough to make it happen but when i got back to the states the reality of
                  the situation without any concrete evidence that i could live in europe took a toll on our relationship. After our breakup I was in a 
                  dark place, but having you to talk to, even as just friends gave me some happiness. But the truth is i was feeling down, to have
                  met someone i deeply cared for and wanted a future with, and to have that taken away because of where i lived. After months of this
                  sadness which only the gym and my family could help, i began to accept the situation we were in. And then i flew to Colombia."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="My deepest regret"
                  image={regret}
                  qualifier=""
                  text="After a week of being in Colombia i began to see that i had not moved on, that my heart still longed for you and that just being friends
                  with you would not fill the void, that it even hurt more because i knew the inevitability of our relationship being at the mercy of
                  the spanish goverment and my job would make it difficult. In that loneliness and realization I made a decision to open my heart to the idea
                  of dating somebody else during my last weeks in Colombia. This is my deepest regret. Not that i tried to open my heart, but that i knew that i was not ready because i still
                  loved you. That my heart had not healed and that i was only looking for a temporary solution, and that the temporary solution only hurt
                  more because i would inevitably have to break someones heart because I could not love them. A week and a half before i came to Colombia
                  I visited my aunt who told me that they had the geneological study proving that we were jewish, and that my cousin had already begun the application
                  on behalf of himself and his mom. This turned my world upside down. I scrambled to setup a meeting with the lawyers and to get them to accept my
                  case. When they finally did and i had payed them and i received the letter from the jewish community that they were reviewing my geneological paperwork,
                  my heart felt hope once again, that the universe was allowing me to pursue love, all i had to do was grasp for it."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="Return to bliss"
                  image={together}
                  qualifier=""
                  text="I came back to spain with a mission.  I had what i needed to prove that this relationship could work,
                  that the temporary distance would not break us because we had a light at the end of the tunnel. The first
                  time i saw you although i was on cloud 9 to be with you finally, at the end of the night though i felt the sadness and uncertainty that 
                  I felt when we first broke up. I felt that maybe you had moved on and that i was too late. I felt that the universe again had taken you away from me.
                  The day when we went to play darts was really fun but it was also one of the worst days for me, because i remembered
                  how much i love spending time with you and how fun it was to be with you, but was still uncertain as it felt like maybe you liked me as a friend, 
                  which was the same thing that had caused me a lot of pain after we broke up. But then i felt joy because you began to open up and then 
                  you came over and we kissed and then... I was whole again."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="The truth"
                  image={truth}
                  qualifier=""
                  text="I did not have to text this person the first time i kissed you, i had to text them immediately when the lawyer accepted my case because my heart
                  was already in spain with you at that moment. You noticed something was off that night. And you were right. I had a heavy heart because
                  i knew that I had to break up with somebody. The truth is that i needed a push to help me do it, as i have not broken up with many people over the
                  course of my life. Its a talent i never learned because my first kiss, and first girlfriend was at 21 and the only person who i have broken up with, I only did after months
                  of therapy. I did not want to tell you for fear of hurting you, but in that moment i thought that maybe you could help me push through it. Im sorry, if i knew the cost
                  of that push would be our relationship i would of done it a million times over on my own."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="My vow"
                  image={hill}
                  qualifier=""
                  text="I'm sorry that i made you feel the way i did. I hate being a bad guy and that fear caused me to potentially lose the person i truly love. If you chose to forgive me and
                  give me a chance to prove myself to you, a chance to show you that I am a good person who has made a mistake. I promise that even in my most insecure i will continue to love and cherish
                  you. That i will never let anything get in the way of us. I gave up on our relationship after we broke up but I promise that if you let me back in your life
                  I will fight tooth and nail for you - for us. I will be a loving partner who supports you and carries you whenever you need it. Someone who you can see yourself falling in love with again. Someone who wants to
                  settle down with you and live every moment we have to the fullest. Someone who takes you to places you havent been and shows you life through a different lense. Someone who loves you deeply.
                  Please give me a chance to prove how much you mean to me."
                ></this.createProject>
                <br></br>
                <this.createProject
                  left="true"
                  title="Another future"
                  image={another}
                  qualifier=""
                  text="I deeply hope that you will give me that chance. But if you chose to let our story together end here, then i just want you to know that i'm deeply sorry and that I hope that you at least understand. You
                  are an incredible person who has changed my life. I want you to know you matter and that you touched my life in a positive way. You showed me a happiness that i did not know was possible, took me to incredible places and showed me
                  a life that i did not know i could live. You are beautiful, talented, loving, passionate, artistic, fun, outgoing (more than you think), and more.
                  I want you to know that i wish the absolute best for you and i know the man whom you chose, will be the luckiest man in the world."
                ></this.createProject>
                <br></br>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
