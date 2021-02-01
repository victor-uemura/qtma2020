import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import LandingPage from "../Landing";

import ProfilePage from "../Profile";

import DonatePage from "../Donate";
import ThanksPage from "../Thanks";
import FAQPage from "../FAQ";
import Footer from "../Footer";
import CartPage from "../Cart";
import VolunteerPage from "../Volunteer";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import MediaQuery from "react-responsive";
import MobileSignUp from "../MobileSignUp";
import { AuthUserContext } from "../Session";

const tagManagerArgs = {
  gtmId: "G-2S1KHF1PW7",
};

TagManager.initialize(tagManagerArgs);

const App = () => (
  <Router>
    <MediaQuery minWidth={1218}>
      <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.DONATE} component={DonatePage} />
        <Route path={ROUTES.THANKS} component={ThanksPage} />
        <Route path={ROUTES.FAQ} component={FAQPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route path={ROUTES.VOLUNTEER} component={VolunteerPage} />
      </div>
      <Footer />
    </MediaQuery>
    <MediaQuery maxWidth={1218}>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <h1>
              Please view on desktop in fullscreen mode! we're working on mobile
              and tablet compatibility! <br /> <br />
              (｀･ω･´)
              <br />
              <br /> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ <br />
              <br /> ┐(︶▽︶)┌
            </h1>
          ) : (
            <MobileSignUp />
          )
        }
      </AuthUserContext.Consumer>
    </MediaQuery>
  </Router>
);

export default withAuthentication(App);
