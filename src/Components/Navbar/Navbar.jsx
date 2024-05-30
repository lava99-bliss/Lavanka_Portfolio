import "./Navbar.css";
import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import lg from "../../../assets/lg.png";
import menu_open from "../../../assets/menu_open.svg";
import nav_underline from "../../../assets/nav_underline.svg";
import menu_close from "../../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={lg} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#mywork">
            <p
              onClick={() => {
                setMenu("mywork");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "mywork" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
