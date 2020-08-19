import React from "react";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";

const SignOut = ({ firebase }) => (
  <Button variant="outlined" onClick={firebase.signOut}>
    Log Out
  </Button>
);

export default withFirebase(SignOut);
