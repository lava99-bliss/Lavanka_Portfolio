import React from "react";
import "./Hero.css";
import me from "../../../assets/me.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={me} alt="" />
      <h1>
        <span>I'm Lavanka Harshani,</span> developer based in Sri Lanka
      </h1>
      <p>
        Front-end Development, Back-end Development, Full-stack Development, API
        development, Web Development , Artificial Intelligence, and Machine
        Learning.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="https://drive.google.com/file/d/1KYORn4jIBy5DEHNQoKeqendFF1ksfan0/view?usp=sharing">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
