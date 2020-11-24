import React from "react";
import SignUpDialog from "../SignUpDialog";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-body">
      <SignUpDialog></SignUpDialog>
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
          <img
            className="landing-rectangle-2"
            src="e5e5e5.png"
            alt="Picture 1"
          ></img>
          <div className="v-middle-box">
            <p className="landing-subtitle">We’re a registered charity</p>
            <p className="landing-p2">
              Voluntera is a registered charity in the province of Ontario. You
              can trust that we’re committed to helping local communities.{" "}
            </p>
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
            opportunities to best match your profile.
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
            For every donation, or time commitment, Voluntera will further your
            contributions by continuing to support the organization.
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
                Not enough time? You can donate money towards organizations too.
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
  );
}

export default Landing;
