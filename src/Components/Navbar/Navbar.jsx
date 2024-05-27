import "./Navbar.css";
import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      <img src="../../assets/lg.png" alt="" />
      <img
        src="../../assets/menu_open.svg"
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src="../../assets/menu_close.svg"
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
          {menu === "home" ? (
            <img src="../../assets/nav_underline.svg" alt="" />
          ) : (
            <></>
          )}
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
          {menu === "about" ? (
            <img src="../../assets/nav_underline.svg" alt="" />
          ) : (
            <></>
          )}
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
          {menu === "mywork" ? (
            <img src="../../assets/nav_underline.svg" alt="" />
          ) : (
            <></>
          )}
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
          {menu === "contact" ? (
            <img src="../../assets/nav_underline.svg" alt="" />
          ) : (
            <></>
          )}
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
