import React from "react";

function Landing() {
  return (
    <div>
      <body className="landing-body">
        <h1 className="landing-title1">The one-stop shop for social impact</h1>
        <p className="landing-p1">
          Voluntera understands that different people want to create a social
          impact in different ways. All of our partner organizations accept
          donations of both time and money.
        </p>
        <button className="landing-button1">Sign up today</button>
        <button className="landing-rectangle-1"></button>
        <button className="landing-rectangle-2"></button>
        <h2 className="landing-subtitle">We’re a registered charity</h2>
        <p className="landing-p2">
          Volunterra is a registered charity in the province of Ontario. You can
          trust that we’re committed to helping local communities.{" "}
        </p>
        <button className="landing-rectangle-3" disabled></button>
        <h1 className="landing-title2">Find organizations near you</h1>
        <p className="landing-p3">
          Our partner organizations are selected after months of research to
          check for credibility, trust, and true need. We curate these
          opportunities to best match your profile.
        </p>
        <button className="landing-rectangle-4" disabled></button>
        <h1 className="landing-title3">
          Make an impact the way that works best for you
        </h1>
        <p className="landing-p4">
          For every donation, or time commitment, Voluntera will further your
          contributions by continuing to support the organization.
        </p>
        <button className="landing-rectangle-5" disabled></button>
        <button className="landing-rectangle-6" disabled></button>
        <h1 className="landing-title4">
          Sign up today and start making an impact{" "}
        </h1>
        <button className="landing-button2">Get Started</button>
      </body>
    </div>
  );
}

export default Landing;
