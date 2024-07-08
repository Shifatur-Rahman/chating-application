import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [checkPass, setCheckPass] = useState(false);
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [wrongPass, setWrongPass] = useState(false);
  let [wrongEmail, setWrongEmail] = useState(false);

  let handleSubmit = () => {
    if (!email) {
      setEmailErr("Please enter your email");
    } else if (!password) {
      setPasswordErr("Please enter your Password");
      setEmailErr("");
    } else {
      setPasswordErr("");
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navigate("/home");
          // console.log(user);
        }) 
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("password")) {
            setWrongPass("Password is Wrong");
          } else if (errorCode.includes("user")) {
            setWrongEmail("Email not found! Please try again");
          } else {
            setWrongPass("");
            setWrongEmail("");
          }
        });
    }
  };

  let handlePass = () => {
    setCheckPass(!checkPass);
  };

  let handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="registration_part">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="box">
            <div className="left">
              <h1>Login to your account!</h1>

              <div className="loginOption">
                <div onClick={handleGoogleSignIn} className="option">
                  <img src="./assets/images/google.png" alt="google-logo" style={{marginRight:"10px"}} />
                  Login with Google
                </div>
                {/* <div className="option">
                  <FaFacebook 
                   style={{marginRight:"10px", fontSize:"20px", color:"#3b5998"}} 
                  />
                  Login with Facebook
                </div> */}
              </div>

              <br />

              {wrongPass ? (
                <Alert variant="filled" severity="warning">
                  {wrongPass}
                </Alert>
              ) : wrongEmail ? (
                <Alert variant="filled" severity="warning">
                  {wrongEmail}
                </Alert>
              ) : (
                ""
              )}

              <TextField
                className="emailInput"
                helperText={emailErr}
                id="demo-helper-text-misaligned"
                label="Email"
                style={{ marginTop: "10px" }}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <div className="eye">
                <TextField
                  className="passwordInput"
                  helperText={passwordErr}
                  id="demo-helper-text-misaligned"
                  label="Password"
                  style={{ marginTop: "10px" }}
                  type={checkPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillEye onClick={handlePass} className="eyeIcon" />
              </div>

              <br />

              <Button
                className="regBtn"
                style={{
                  padding: "11px 0",
                  borderRadius: "86px",
                  background: "#5F35F5",
                  color: "#fff",
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                Login to Continue
              </Button>
              <p className="msg">
                Don't have an account ?{" "}
                <Link
                  style={{ color: "#ea6c00", textDecoration: "none" }}
                  to="/"
                >
                  Sign up     
                </Link>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="./assets/images/login.png"
            alt="registration_img"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;
