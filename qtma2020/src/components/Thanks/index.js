import React from "react";
import SignUpDialog from "../SignUpDialog";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="landing-body">
      <div className="landing-top">
        <div className="landing-title1">Thank you for your donation!</div>
        <div className="landing-p1">
          Voluntera understands that different people want to create a social
          impact in different ways. All of our partner organizations accept
          donations of both time and money.
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="landing-button1">Return To Landing</button>
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
