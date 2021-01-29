import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu1,
  NavMenu2,
  NavBtn,
  NavBtn2,
  NavBtnLink,
} from "./NavbarElements";
import SignUpDialog from "../SignUpDialog";
import LogInDialog from "../LogInDialog";
import "./index.css";
import { AuthUserContext } from "../Session";
import firebase from "../Firebase";
import { compose, withProps } from "recompose";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import NavBarIconBlack from "../NavBarIcon/black";
import NavBarIconWhite from "../NavBarIcon/white";

const NavBarNonAuth = (props) => {
  return (
    <>
      <Nav background={props.background}>
        <NavLink to="/">
          <img src={props.logo} width="145" height="40" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu1>
          <NavLink to="/donate" activeStyle>
            <p
              className="text"
              style={{
                color: props.fontColor,
              }}
            >
              Donate
            </p>
          </NavLink>
          <NavLink to="/volunteer" activeStyle>
            <p
              className="text"
              style={{
                color: props.fontColor,
              }}
            >
              Volunteer
            </p>
          </NavLink>
          <NavLink to="/faq" activeStyle>
            <p
              className="text"
              style={{
                color: props.fontColor,
              }}
            >
              FAQ
            </p>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu1>
        <NavMenu2>
          <NavLink to="/cart" activeStyle>
            <p
              className="text"
              style={{
                color: props.fontColor,
                paddingRight: "0.5vw",
              }}
            >
              Cart
            </p>
            {props.fontColor == "#fff" ? (
              <NavBarIconWhite />
            ) : (
              <NavBarIconBlack />
            )}
          </NavLink>
          <NavBtn>
            <LogInDialog fontColor={props.fontColor} />
          </NavBtn>
          <NavBtn2>
            <SignUpDialog
              fontColor={props.signUpColor}
              background={props.signUpBackground}
            />
          </NavBtn2>
        </NavMenu2>
      </Nav>
    </>
  );
};

const NavBarAuthBase = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    props.firebase.getCurrentUser(props.authUser).then((response) => {
      setCurrentUser(response);
      setIsLoading(false);
    });
  }, [isLoading]);
  return isLoading ? (
    <NavBarNonAuth
      logo={props.logo}
      fontColor={props.fontColor}
      background={props.background}
      signUpColor={props.signUpColor}
      signUpBackground={props.signUpBackground}
    />
  ) : (
    <Nav background={props.background}>
      <NavLink to="/">
        <img src={props.logo} width="145" height="40" alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu1>
        <NavLink to="/donate" activeStyle>
          <p
            className="text"
            style={{
              color: props.fontColor,
            }}
          >
            Donate
          </p>
        </NavLink>
        <NavLink to="/volunteer" activeStyle>
          <p
            className="text"
            style={{
              color: props.fontColor,
            }}
          >
            Volunteer
          </p>
        </NavLink>
        <NavLink to="/faq" activeStyle>
          <p
            className="text"
            style={{
              color: props.fontColor,
            }}
          >
            FAQ
          </p>
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu1>
      <NavMenu2>
        <NavLink to="/cart" activeStyle>
          <p
            className="text"
            style={{
              color: props.fontColor,
              paddingRight: "0.5vw",
            }}
          >
            Cart
          </p>
          {props.fontColor == "#fff" ? (
            <NavBarIconWhite />
          ) : (
            <NavBarIconBlack />
          )}
        </NavLink>
        <NavLink to="/profile" activeStyle>
          <p
            className="text"
            style={{
              color: props.fontColor,
            }}
          >
            Hi {String(currentUser.name).split(" ")[0]}!
          </p>
        </NavLink>
      </NavMenu2>
    </Nav>
  );
};

const NavBarAuth = compose(withRouter, withFirebase)(NavBarAuthBase);

const NavBarDialog = (props) => (
  <div>
    <NavBarAuth
      logo={props.logo}
      fontColor={props.fontColor}
      background={props.background}
      signUpColor={props.signUpColor}
      signUpBackground={props.signUpBackground}
      authUser={props.authUser}
    />
  </div>
);

export default function NavBar(props) {
  return (
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavBarDialog
            logo={props.logo}
            fontColor={props.fontColor}
            background={props.background}
            signUpColor={props.signUpColor}
            signUpBackground={props.signUpBackground}
            authUser={authUser}
          />
        ) : (
          <NavBarNonAuth
            logo={props.logo}
            fontColor={props.fontColor}
            background={props.background}
            signUpColor={props.signUpColor}
            signUpBackground={props.signUpBackground}
          />
        )
      }
    </AuthUserContext.Consumer>
  );
}
