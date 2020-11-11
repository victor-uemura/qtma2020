import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignupPage from "../Signup";
import LoginPage from "../Login";
import HomePage from "../Home";
import ProfilePage from "../Profile";
import PasswordForgetPage from "../PasswordForget";
import AdminPage from "../Admin";
import AccountPage from "../Account";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const tagManagerArgs = {
  gtmId: "G-2S1KHF1PW7",
};

TagManager.initialize(tagManagerArgs);

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
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
