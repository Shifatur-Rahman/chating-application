import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [confirmpasswordErr, setConfirmpasswordErr] = useState("");
  let [passwordLengthErr, setPasswordLengthErr] = useState("");
  let [matchPassword, setMatchPassword] = useState("");
  let [existEmail, setExistEmail] = useState(false);

  let handleSubmit = () => {
    if (!name) {
      setNameErr("Please enter a Name");
    } else if (!email) {
      setEmailErr("Please enter your email");
      setNameErr("");
    } else if (!password) {
      setPasswordErr("Please enter your Password");
      setEmailErr("");
    } else if (password.length < 8) {
      setPasswordLengthErr("Password must be greater than 8");
      setPasswordErr("");
    } else if (!confirmpassword) {
      setConfirmpasswordErr("Please confirm your Password");
      setPasswordLengthErr("");
    } else if (password !== confirmpassword) {
      setMatchPassword("Password not Matched");
    } else {
      setConfirmpasswordErr("");
      setMatchPassword("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          sendEmailVerification(auth.currentUser).then((data) => {
            //console.log("Email send");
            //console.log(data);
            updateProfile(auth.currentUser, {
              displayName: name,
            })
              .then(() => {
                // write database (jara registration korche tader data send korchi )
                set(ref(db, "users/" + auth.currentUser.uid), {
                  username: name,
                  email: email,
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          // console.log(auth.currentUser);

          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("email")) {
            setExistEmail("Email already in use Please try another email.");
          }
        });
    }
  };

  return (
    <section className="registration_part">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="box">
            <div className="left">
              <h1>Get started with easily register</h1>
              <p style={{ marginBottom: "20px" }}>
                Free register and you can enjoy it
              </p>
              {existEmail ? <Alert severity="error">{existEmail}</Alert> : ""}

              <TextField
                helperText={nameErr}
                id="demo-helper-text-misaligned"
                label="FullName"
                style={{ width: "365px", marginTop: "40px" }}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
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
              <TextField
                helperText={
                  passwordErr
                    ? passwordErr
                    : passwordLengthErr
                    ? passwordLengthErr
                    : ""
                }
                id="demo-helper-text-misaligned"
                label="Password"
                style={{ width: "365px", marginTop: "40px" }}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <br />
              <TextField
                helperText={
                  confirmpasswordErr
                    ? confirmpasswordErr
                    : matchPassword
                    ? matchPassword
                    : ""
                }
                id="demo-helper-text-misaligned"
                label="Confirm Password"
                style={{ width: "365px", marginTop: "40px" }}
                type="password"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
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
                Sign Up
              </Button>

              <p className="msg">
                Already have an account ?{" "}
                <Link
                  style={{ color: "#ea6c00", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ width: "100%", height: "100vh" }}
            src="./assets/images/reg.png"
            alt="registration_img"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Registration;
