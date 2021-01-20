import React, { useState, useEffect } from "react";
import { withAuthorization } from "../Session";
// nodejs library that concatenates classes
import SignOut from "../SignOut";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";

function ProfilePage() {
  return (
    <div>
      <Navigation
        logo={logoBlack}
        fontColor="#000"
        background="#fff"
        signUpColor="#fff"
        signUpBackground="#437F55"
      />
      <SignOut />
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ProfilePage);
