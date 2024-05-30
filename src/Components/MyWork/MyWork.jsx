import React from "react";
import "./MyWork.css";

import theme_pattern from "../../../assets/theme_pattern.svg";
import pro1 from "../../../assets/pro1.png";
import pro2 from "../../../assets/pro2.png";
import pro3 from "../../../assets/pro3.png";
import pro4 from "../../../assets/pro4.png";
import pro5 from "../../../assets/pro5.png";
import pro6 from "../../../assets/pro6.png";
import pro7 from "../../../assets/pro7.png";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <a href="https://gpt3web-navy.vercel.app">
          <img id="pro1" src={pro1} alt="" />
        </a>
        <a href="https://socialx-theta.vercel.app">
          <img id="pro1" src={pro2} alt="" />
        </a>
        <a href="https://geritch-beryl.vercel.app">
          <img id="pro1" src={pro3} alt="" />
        </a>
        <a href="https://github.com/lava99-bliss/shopmenow0.git">
          <img id="pro1" src={pro4} alt="" />
        </a>
        <a href="https://weather-app-one-nu-66.vercel.app">
          <img id="pro1" src={pro6} alt="" />
        </a>
        <a href="https://github.com/lava99-bliss/Botme.git">
          <img id="pro2" src={pro5} alt="" />
        </a>
        <a href="" class="image-container">
          <img id="pro1" src={pro7} alt="" />
          <div className="overlay">You are currently in the project</div>
        </a>
      </div>
      <div className="showmore">Show more...</div>
    </div>
  );
};

export default MyWork;
