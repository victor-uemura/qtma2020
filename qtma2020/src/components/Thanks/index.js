import React from "react";
import SignUpDialog from "../SignUpDialog";
import { Link } from "react-router-dom";
import "./index.css";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";

function Thanks() {
  return (
    <div>
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />
      <div className="thanks-body">
        <div className="thanks-top">
          <div className="thanks-title1">Thank you for your donation!</div>
          <div className="thanks-p1">
            Voluntera understands that different people want to create a social
            impact in different ways.
            <br /> All of our partner organizations accept donations of both
            time and money.
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="thanks-button1">Return To Landing</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
