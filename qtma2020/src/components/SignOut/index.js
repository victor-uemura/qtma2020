import React from "react";
import { withFirebase } from "../Firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import "./index.css";

const SignOut = ({ firebase }) => (
  <div>
    <button className="signout" onClick={firebase.signOut}>
      Sign Out
    </button>
  </div>
);

export default withFirebase(SignOut);
