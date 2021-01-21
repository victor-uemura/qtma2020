import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import LandingPage from "../Landing";
import SignupPage from "../SignUpDialog";
import HomePage from "../Home";
import ProfilePage from "../Profile";
import PasswordForgetPage from "../PasswordForget";
import AdminPage from "../Admin";
import AccountPage from "../Account";
import DonatePage from "../Donate";
import ThanksPage from "../Thanks";
import FAQPage from "../FAQ";
import Footer from "../Footer";
import CartPage from "../Cart";
import TempPage from "../Temp";

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
      <Route path={ROUTES.DONATE} component={DonatePage} />
      <Route path={ROUTES.THANKS} component={ThanksPage} />
      <Route path={ROUTES.FAQ} component={FAQPage} />
      <Route path={ROUTES.SIGNUP} component={SignupPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.CART} component={CartPage} />
      <Route path={ROUTES.TEMP} component={TempPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
    </div>
    <Footer />
  </Router>
);

export default withAuthentication(App);
