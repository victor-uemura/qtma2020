import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Button from "@material-ui/core/Button";
import loginStyles from "../../styles/material-kit-react/loginStyle";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import theme from "../Color/colorTheme";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://qtma.ca">
        QTMA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .emailSignIn(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    const classes = loginStyles;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={classes.appBarSpacer} />
        <br />
        <br />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                disabled={isInvalid}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
              <br />
              <br />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography>Don't have an account? </Typography>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to={ROUTES.SIGNUP}
                    aria-label="show 17 new notifications"
                    className={classes.menuButton}
                    variant="outlined"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs>
                  <Button
                    component={Link}
                    to={ROUTES.HOME}
                    aria-label="show 17 new notifications"
                    className={classes.menuButton}
                    variant="outlined"
                  >
                    Forgot password?
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={6}>
            <Copyright />
          </Box>
        </Container>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;
export { SignInForm };
