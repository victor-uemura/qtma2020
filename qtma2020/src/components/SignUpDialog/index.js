import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./index.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUpDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, register, watch, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div>
      <Button
        //variant='outlined'
        style={{
          color: "#FFFFFF",
          fontFamily: "Recoleta Alt",
          fontWeight: "400",
          fontSize: "14px",
        }}
        //color='#FFFFFF'
        onClick={handleClickOpen}
      >
        Get Started
      </Button>

      <Dialog maxWidth={false} onClose={handleClose} open={open}>
        <div className="container">
          <div className="row">
            <div className="columnSml">
              <img className="dialogImg" src="7EB9B2.png" />
            </div>
            <div className="columnLrg">
              <DialogTitle style={{ padding: "0rem 2rem" }}>
                Create an account
              </DialogTitle>
              <DialogContent style={{ padding: "0rem 2rem" }}>
                <DialogContentText style={{ paddingBottom: "1rem" }}>
                  Fill in the information below to get started today!
                </DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <TextField
                      fullWidth
                      style={{ marginRight: "1rem" }}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      name="firstName"
                      label="First Name"
                      placeholder="ex. John"
                      inputRef={register}
                    />
                    <TextField
                      fullWidth
                      style={{ marginLeft: "1rem" }}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      name="lastName"
                      label="Last Name"
                      placeholder="Smith"
                      inputRef={register}
                    />
                  </div>
                  <TextField
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john.smith@email.com"
                    inputRef={register}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    name="passwordOne"
                    label="Password"
                    type="password"
                    placeholder="Type password here"
                    inputRef={register}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    name="passwordTwo"
                    label="Confirm password"
                    type="password"
                    placeholder="Retype password"
                    inputRef={register}
                  />

                  <div className="separator">or</div>
                  <div className="row">
                    <Button
                      startIcon={<FcGoogle />}
                      fullWidth
                      variant="outlined"
                      style={{
                        borderColor: "#BDBDBD",
                        color: "#777777",
                      }}
                    >
                      Continue with Google
                    </Button>
                  </div>
                  <div className="row">
                    <Button
                      startIcon={<FaFacebook style={{ color: "#1877f2" }} />}
                      fullWidth
                      variant="outlined"
                      style={{
                        borderColor: "#BDBDBD",
                        color: "#777777",
                      }}
                    >
                      Continue with Facebook
                    </Button>
                  </div>
                  <div className="row">
                    <p>
                      Already have an account? <a href="">Log in</a>
                    </p>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "#437F55",
                        borderRadius: "50px",
                        color: "#FFFFFF",
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SignUpDialog;
