import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import Navigation from "../NavBar";
import LandingPage from "../Landing";
import SignupPage from "../Signup";
import LoginPage from "../Login";
import HomePage from "../Home";
import ProfilePage from "../Profile";
import PasswordForgetPage from "../PasswordForget";
import AdminPage from "../Admin";
import AccountPage from "../Account";
import DonatePage from "../Donate";
import ThanksPage from "../Thanks";
import FAQPage from "../FAQ";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const tagManagerArgs = {
  gtmId: "G-2S1KHF1PW7",
};

TagManager.initialize(tagManagerArgs);

const App = () => (
  <Router>
    <Navigation />
    <Route exact path={ROUTES.LOGIN} component={LandingPage} />
    <Route path={ROUTES.LOGIN} component={LoginPage} />
    <Route path={ROUTES.SIGNUP} component={SignupPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.PROFILE} component={ProfilePage} />

    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.DONATE} component={DonatePage} />
      <Route path={ROUTES.THANKS} component={ThanksPage} />
      <Route path={ROUTES.FAQ} component={FAQPage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.SIGNUP} component={SignupPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
