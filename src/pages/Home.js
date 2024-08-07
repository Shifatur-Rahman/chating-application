import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Leftbar from "../components/Leftbar";
import Search from "../components/Search";
import GroupList from "../components/GroupList";
import FriendRequest from "../components/FriendRequest";
import Friends from "../components/Friends";
import UserList from "../components/UserList";

const Home = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [emailVerify, setEmailVerify] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmailVerify(user.emailVerified);
        //console.log(user);
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
            <Leftbar active="home" />     
          </Grid>
          <Grid item xs={4}>
            {/* <Search /> */}
            {/* <GroupList /> */} 
            <FriendRequest /> 
          </Grid>
          <Grid item xs={3}>
             <UserList />
          </Grid>
          <Grid item xs={3}>
            <Friends item="date" />
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
