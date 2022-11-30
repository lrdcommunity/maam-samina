import React from "react";
import Logo from "../../image/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">
              &#9776;
            </label>
            <div className="menu">
              <li><a href="/">About Me</a></li>
              <li><a href="#Qualification">Qualification</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Contact">Contact</a></li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
