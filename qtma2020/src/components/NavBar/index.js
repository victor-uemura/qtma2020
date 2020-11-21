import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import "../Firebase/firebase";
import useStyles from "../../styles/styles";
import * as ROLES from "../../constants/roles";
import SignUpDialog from "../SignUpDialog";


const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar
        variant="dense"
        style={{
          backgroundColor: "white",
          marginTop: '10px'
        }}
      >
        <div>
          <img 
              src="volunteraLogo.png"
              height = "38"
              width = "118"
              style={{
                marginLeft:"75px",
                marginRight: "60px"
              }}
               >

          </img>
        </div>

        <div>
          <Button 
            color="#000000"
            component={Link} to={ROUTES.LANDING}
          >
            Home
          </Button>

          <Button 
            color="#000000"
            //Link to about page
            >
            About
          </Button>

          <Button 
            color="#000000"
            //Link to FAQ page
            style={{
              marginRight: "700px"
            }}
            >
            FAQ
          </Button>
        </div>

        <div>
          <Button 
            color="#000000"
            component={Link} to={ROUTES.SIGNUP}
            style={{
              marginRight: "10px"
            }}
            >
            Log in
          </Button>

          <Button 
              variant='contained'
              style={{
                  backgroundColor: '#437F55',
                  borderRadius: '50px',
                  color: '#FFFFFF',
              }}
              >
                <SignUpDialog></SignUpDialog>
          </Button>
        </div>

      </Toolbar>
      <div className={classes.offset} />
    </>
  );
};

export default NavBar; 


