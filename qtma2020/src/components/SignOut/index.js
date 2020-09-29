import React from "react";
import { withFirebase } from "../Firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SignOut = ({ firebase }) => (
  <ListItem button onClick={firebase.signOut}>
    <ListItemIcon>
      <ExitToAppIcon />
    </ListItemIcon>
    <ListItemText primary="Sign Out" />
  </ListItem>
);

export default withFirebase(SignOut);
