import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="../../assets/theme_pattern.svg" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="../../assets/me1.png" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Currently I am a final year student at the University of Sri
              Jayewardenepura following the degree Computer Science (Honors).{" "}
            </p>
            <p>
              I have a strong background in web development and I am passionate
              about creating responsive and visually appealing web applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "15%" }} />
            </div>
            <div className="about-skill">
              <p>.NET(MVC)</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "15%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "20%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
