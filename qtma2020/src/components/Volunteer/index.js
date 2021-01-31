import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";
import { AuthUserContext } from "../Session";

const VolunteerBase = () => {
  return (
    <div>
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />
      <div className="volunteer-body">
        <div className="volunteer-text">
          Step 1: Choose and sign up for an opportunity below.
        </div>
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/shrPAlELyP12UjVgX?backgroundColor=greenLight&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="65%"
          height="500px"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>

        <div className="volunteer-text">
          Step 2: Fill out this form to let us know you volunteered!
        </div>

        <a
          className="match-hours"
          style={{ textDecoration: "none" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLXMMnubVGFUsmc9FMkYymkghG_tq5JmWl9r2jORyZRJKnAw/viewform?usp=sf_link"
          target="_blank"
        >
          Match my Hours!
        </a>
      </div>
    </div>
  );
};

const NonVolunteerBase = () => {
  return (
    <div>
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />
      <div className="please-text">
        Sign up to unlock social impact matching!
      </div>
    </div>
  );
};

export default function Volunteer() {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <VolunteerBase /> : <NonVolunteerBase />)}
    </AuthUserContext.Consumer>
  );
}
