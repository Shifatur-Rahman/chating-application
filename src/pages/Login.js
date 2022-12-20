import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [checkPass, setCheckPass] = useState(false);
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

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
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let handlePass = () => {
    setCheckPass(!checkPass);
  };

  return (
    <section className="registration_part">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="box">
            <div className="left">
              <h1>Login to your account!</h1>

              <div className="loginOption">
                <div className="option">
                  <img src="./assets/images/google.png" alt="google-logo" />
                  Login with Google
                </div>
                <div className="option">
                  <img src="./assets/images/google.png" alt="fb-logo" />
                  Login with Facebook
                </div>
              </div>

              <br />
              <TextField
                helperText={emailErr}
                id="demo-helper-text-misaligned"
                label="Email"
                style={{ width: "365px", marginTop: "40px" }}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <div className="eye">
                <TextField
                  helperText={passwordErr}
                  id="demo-helper-text-misaligned"
                  label="Password"
                  style={{ width: "365px", marginTop: "40px" }}
                  type={checkPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillEye onClick={handlePass} className="eyeIcon" />
              </div>

              <br />

              <Button
                style={{
                  width: "368px",
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
