import React from "react";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src="../../assets/theme_pattern.svg" alt="" />
      </div>
      <div className="mywork-container">
        <a href="https://gpt3web-navy.vercel.app">
          <img id="pro1" src="../../assets/pro1.JPG" alt="" />
        </a>
        <a href="https://socialx-theta.vercel.app">
          <img id="pro1" src="../../assets/pro2.JPG" alt="" />
        </a>
        <a href="https://geritch-beryl.vercel.app">
          <img id="pro1" src="../../assets/pro3.JPG" alt="" />
        </a>
        <a href="https://github.com/lava99-bliss/shopmenow0.git">
          <img id="pro1" src="../../assets/pro4.JPG" alt="" />
        </a>
        <a href="https://weather-app-one-nu-66.vercel.app">
          <img id="pro1" src="../../assets/pro6.JPG" alt="" />
        </a>
        <a href="https://github.com/lava99-bliss/Botme.git">
          <img id="pro2" src="../../assets/pro5.JPG" alt="" />
        </a>
      </div>
      <div className="showmore">Show more...</div>
    </div>
  );
};

export default MyWork;
