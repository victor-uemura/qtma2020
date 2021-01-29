import React from "react";
import "./index.css";
import logoBlack from "../../assets/img/logo-black.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="body">
        <div className="logo">
          <img src={logoBlack} width="136" height="37.5" alt="logo" />
          <p className="logo-text">
            The one stop shop for <br />
            social impact
          </p>
        </div>
        <div className="contact">
          <p className="header">Contact</p>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <p className="regular">FAQ</p>
          </Link>
        </div>
        <div className="about">
          <p className="header">About Us</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="regular">Partners</p>
          </Link>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <p className="regular">How we work</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
