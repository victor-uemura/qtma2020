import React from "react";
import { withAuthorization } from "../Session";
// nodejs library that concatenates classes
import classNames from "classnames";

//custom components
import Parallax from "../MaterialKit/Parallax/Parallax.js";
import Button from "../MaterialKit/CustomButtons/Button.js";
import GridContainer from "../MaterialKit/Grid/GridContainer.js";
import GridItem from "../MaterialKit/Grid/GridItem.js";

import styles from "../../styles/material-kit-react/profilePage.js";
import { makeStyles } from "@material-ui/core";

import profile from "./../../assets/img/christian.jpg";

const useStyles = makeStyles(styles);

function ProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Parallax
        small
        filter
        image={require("../../assets/img/profile-bg.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>James Huffington</h3>
                    <h6>Developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ProfilePage);
