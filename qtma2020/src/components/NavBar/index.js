import React from "react";
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

const Navbar = (props) => {
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
          <NavLink to="/about" activeStyle>
            <p
              className="text"
              style={{
                color: props.fontColor,
              }}
            >
              About
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
          <NavBtn>
            <LogInDialog fontColor={props.fontColor} />
          </NavBtn>
          <NavBtn2>
            <SignUpDialog fontColor="#000" />
          </NavBtn2>
        </NavMenu2>
      </Nav>
    </>
  );
};

export default Navbar;
