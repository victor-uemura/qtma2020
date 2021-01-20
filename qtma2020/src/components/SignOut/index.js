import React from "react";
import { withFirebase } from "../Firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const SignOut = ({ firebase }) => (
  <li>
    <Link to="/" onClick={firebase.signOut}>
      SignOut
    </Link>
  </li>
);

export default withFirebase(SignOut);
