import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";

function FAQ() {
  return (
    <div>
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />

      <div className="faq-body1">
        <div className="faq-title1">
          <u>Frequently Asked Questions</u>
        </div>
        <div className="faq-question">
          Who are the organizations Voluntera partners with?
        </div>
        <div className="faq-answer">
          Voluntera currently partners with local Kingston-based organizations
          and nonprofits. If you have a local organization who would benefit
          from Voluntera let us know!
        </div>
        <div className="faq-question">
          Are there requirements to be a volunteer?
        </div>
        <div className="faq-answer">
          Any requirements will be outlined by the specific organization you
          chose to volunteer with. At Voluntera we simply ask for your
          commitment as a volunteer within the community!
        </div>
        <div className="faq-question">
          Do I have to donate as a volunteer/ Do I have to volunteer and donate?
        </div>
        <div className="faq-answer">
          No! If you have time to offer, volunteer your time. If you don’t have
          the time but still want to make an impact, donate.
        </div>
        <div className="faq-question">Where does the money I donate go?</div>
        <div className="faq-answer">
          The money you donate goes towards the organizations listed on our
          platform. Each donation serves as an ‘enabler’ for our volunteers, and
          each organization that receives a donation is matched with an
          accompanying volunteer.
        </div>
        <div className="faq-question">
          How does volunteering work during COVID-19?
        </div>
        <div className="faq-answer">
          All of our volunteering opportunities follow local public health
          guidelines. Many of our partner organizations offer virtual
          volunteering opportunities. Specific information regarding each
          opportunity is outlined under the posting.
        </div>

        <div className="faq-question">
          What does the volunteer application process look like?
        </div>
        <div className="faq-answer">
          Once your profile and registration is complete with Voluntera, we will
          automatically forward your information to the volunteering
          opportunities you apply for. Certain opportunities/organizations may
          specify additional information during the application process.
        </div>
        <div className="faq-question">What cities is Voluntera present in?</div>
        <div className="faq-answer">
          Volutera is based in Kingston, ON and offers opportunities in Kingston
          and the Greater Toronto Area.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
