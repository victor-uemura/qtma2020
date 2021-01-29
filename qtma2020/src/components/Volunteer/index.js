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
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrPAlELyP12UjVgX?backgroundColor=greenLight&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="600"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
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
