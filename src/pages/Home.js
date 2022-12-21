import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Leftbar from "../components/Leftbar";

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
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Leftbar />
          </Grid>
          <Grid item xs={4}>
            two
          </Grid>
          <Grid item xs={3}>
            three
          </Grid>
          <Grid item xs={3}>
            Four
          </Grid>
        </Grid>
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
