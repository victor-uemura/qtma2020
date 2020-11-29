import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import "../Firebase/firebase";
import SignUpDialog from "../SignUpDialog";
import "./index.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="volunteraLogo.png" height="57vw" width="177vw"></img>
      </div>

      <div className="three-item">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button-label3">Home</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button-label3">About</button>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <button className="button-label3">FAQ</button>
        </Link>
      </div>

      <div className="two-item">
        <button className="button-label" component={Link} to={ROUTES.SIGNUP}>
          Log in
        </button>

        <button className="button-label2" variant="contained">
          <SignUpDialog></SignUpDialog>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
