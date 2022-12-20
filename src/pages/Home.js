import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [emailVerify, setEmailVerify] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setEmailVerify(user.emailVerified);
        console.log(user);
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      {emailVerify ? (
        "Home Page"
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Alert variant="filled" severity="error">
              Please Check your Email for verification
            </Alert>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
