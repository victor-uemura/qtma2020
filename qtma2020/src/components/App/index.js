import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

import LandingPage from "../Landing";
import SignupPage from "../SignUpDialog";
import LoginPage from "../Login";
import HomePage from "../Home";
import ProfilePage from "../Profile";
import PasswordForgetPage from "../PasswordForget";
import AdminPage from "../Admin";
import AccountPage from "../Account";
import DonatePage from "../Donate";
import ThanksPage from "../Thanks";
import FAQPage from "../FAQ";
import logoBlack from "../../assets/img/logo-black.svg";
import logoWhite from "../../assets/img/logo-white.svg";
import Navigation from "../NavBar";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const tagManagerArgs = {
  gtmId: "G-2S1KHF1PW7",
};

TagManager.initialize(tagManagerArgs);

const App = () => (
  <Router>
    <Route exact path={ROUTES.LOGIN} component={LandingPage} />
    <Route path={ROUTES.LOGIN} component={LoginPage} />
    <Route path={ROUTES.SIGNUP} component={SignupPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.PROFILE} component={ProfilePage} />

    <div>
      <DynamicLayoutRoute
        exact
        path={ROUTES.LANDING}
        component={LandingPage}
        layout="LANDING_NAV"
      />
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

const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props;

  // render actual Route from react-router
  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  );

  // depends on the layout, you can wrap Route component in different layouts
  switch (layout) {
    case "NAV": {
      return (
        <Navigation logo={logoBlack} fontColor="#000" background="#fff">
          {actualRouteComponent}
        </Navigation>
      );
    }
    case "LANDING_NAV": {
      return (
        <Navigation logo={logoWhite} fontColor="#fff" background="#437F62">
          {actualRouteComponent}
        </Navigation>
      );
    }
    default: {
      return (
        <Navigation logo={logoBlack} fontColor="#000" background="#fff">
          {actualRouteComponent}
        </Navigation>
      );
    }
  }
};

export default withAuthentication(App);
