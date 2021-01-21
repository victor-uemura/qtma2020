import React from "react";
import SignUpDialog from "../SignUpDialog";
import { Link } from "react-router-dom";
import Navigation from "../NavBar";
import logoWhite from "../../assets/img/logo-white.svg";
import StepsBlock from "../StepsBlock";

function Landing() {
  return (
    <div>
      <Navigation
        logo={logoWhite}
        fontColor="#fff"
        background="#437F62"
        signUpColor="#1B4843"
        signUpBackground="#F3FDFC"
      />

      <div className="landing-body">
        <div className="landing-top">
          <div className="landing-title1">
            The one-stop shop for social impact
          </div>
          <div className="landing-p1">
            Voluntera understands that different people want to create a social
            impact in different ways. All of our partner organizations accept
            donations of both time and money.
          </div>
          <button className="landing-button1">Sign up today</button>
          <img
            className="landing-rectangle-1"
            src="e5e5e5.png"
            alt="Picture 1"
          ></img>
          <div className="h-middle-box"> 
            <div className="v-middle-box">

              <p className="landing-subtitle">Here are some of our partnered organizations</p>
              <p className="landing-p2">Our partner organizations are selected after months of research to
                check for credibility, trust, and true need. We curate these opportunities 
                to best match your profile.{" "}
              </p>
              <div class="grid">
                <a href="https://www.cysticfibrosis.ca/" target="_blank"><img src="cystic_fibrosis_canada.svg" alt="cystic fibrosis canada"></img></a>
                <a href="https://kidney.ca/" target="_blank"><img src="kidney_foundation.svg" alt="kidney foundation"></img></a>
                <a href="https://lunghealth.ca/" target="_blank"><img src="lung_health_foundation.svg" alt="lung health foundation"></img></a>
                <a href="http://www.marthastable.ca/" target="_blank"><img src="marthas_table.svg" alt="Martha's table"></img></a>
                <a href="https://bfo-kingston.ca/" target="_blank"><img src="bereaved_ontario.svg" alt="Bereaved Families of Ontario"></img></a>

                <a href="https://www.neads.ca/" target="_blank"><img src="neads.svg" alt="NEADS"></img></a>
                <a href="https://www.amhs-kfla.ca/" target="_blank"><img src="amhs_kfla.svg" alt="AMHS KFLA"></img></a>
                <a href="https://www.cnib.ca/en?region=on" target="_blank"><img src="cnib_foundation.svg" alt="CNIB Foundation"></img></a>
                <a href="https://www.kingstonfoodbank.ca/" target="_blank"><img src="foodbank.svg" alt="Partners in Mission Foodbank"></img></a>
                <a href="https://www.marchofdimes.ca/en-ca" target="_blank"><img src="march_canada.svg" alt="March of Dimes Canada"></img></a>
              </div>

            </div>
          </div>
          <div className="image-3">
            <img
              className="landing-rectangle-3"
              src="7eb9b2.png"
              alt="Picture 1"
            ></img>
          </div>
          <div className="left-title">
            <h1 className="landing-title2">Find organizations near you</h1>
          </div>
          <div className="left-title">
            <p className="landing-p3">
              Our partner organizations are selected after months of research to
              check for credibility, trust, and true need. We curate these
              opportunities to best match your profile
            </p>
          </div>
          <img
            className="landing-rectangle-4"
            src="e5e5e5.png"
            alt="Picture 1"
          ></img>
          <div className="h-middle-box2">
            <h1 className="landing-title3">
              Make an impact the way that works best for you
            </h1>
            <p className="landing-p4">
              For every donation, or time commitment, Voluntera will further
              your contributions by continuing to support the organization.
            </p>
          </div>
          <div className="h-middle-box3">
            <img
              className="landing-rectangle-5"
              src="e5e5e5.png"
              alt="Picture 1"
            ></img>
            <div className="v-middle-box2">
              <div className="landing-subtitle2">Volunteer your time</div>
              <div className="landing-p5">
                Apply to volunteer at select local charities chosen by our team.
              </div>
              <Link to="/donate" style={{ textDecoration: "none" }}>
                <div className="landing-subtitle3">Donate money</div>
                <div className="landing-p6">
                  Not enough time? You can donate money towards organizations
                  too.
                </div>
              </Link>
            </div>
          </div>
          <div className="image-3">
            <img
              className="landing-rectangle-6"
              src="f46c35.png"
              alt="Picture 1"
            ></img>
          </div>
          <h1 className="landing-title4">
            Sign up today and start making an impact{" "}
          </h1>
          <button className="landing-button2">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
