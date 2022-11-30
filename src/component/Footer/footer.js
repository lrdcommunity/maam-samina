import React from "react";
import "./footer.css";
import Linkedin from '../../image/linkedin.svg';
import Instagram from '../../image/Instagram.svg';
import Twitter from '../../image/Twitter.svg';
import Facebook from '../../image/Facebook.svg';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Contact</li>
            <li>Awards</li>
          </ul>
          <div className="icons">
            <a href="/">
            <img src={Linkedin} alt=""/>
            </a>
            <a href="/">
            <img src={Instagram} alt=""/>
            </a>
            <a href="/">
            <img src={Twitter} alt=""/>
            </a>
            <a href="/">
            <img src={Facebook} alt=""/>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Design & Developed by LRD Community - ED Wing</p>
          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
