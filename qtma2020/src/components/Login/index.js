import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Button from "@material-ui/core/Button";
import loginStyles from "../../styles/material-kit-react/loginStyle";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        return this.props.firebase.user(socialAuthUser.user.uid).set(
          {
            name: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            donations: [],
          },
          { merge: true }
        );
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    const classes = loginStyles;

    return (
      <form onSubmit={this.onSubmit}>
        <Button
          type="submit"
          startIcon={<FcGoogle />}
          fullWidth
          variant="outlined"
          style={{
            width: this.props.width,
            borderColor: "#BDBDBD",
            color: "#777777",
          }}
        >
          Continue with Google
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithFacebook()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set(
          {
            name: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            donations: [],
          },
          { merge: true }
        );
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Button
          type="submit"
          startIcon={
            <FaFacebook
              style={{
                color: "#1877f2",
              }}
            />
          }
          variant="outlined"
          style={{
            width: this.props.width,
            borderColor: "#BDBDBD",
            color: "#777777",
          }}
        >
          Continue with Facebook
        </Button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

const SignInFacebook = compose(withRouter, withFirebase)(SignInFacebookBase);

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

export { SignInGoogle, SignInFacebook };
