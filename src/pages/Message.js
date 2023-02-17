import React from "react";
import { Grid } from "@mui/material";
import Leftbar from "../components/Leftbar";
import Search from "../components/Search";
import GroupList from "../components/GroupList";
import FriendRequest from "../components/FriendRequest";
import Friends from "../components/Friends";
import UserList from "../components/UserList";
import Chat from "../components/Chat";

const Message = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Leftbar active="msg" />
        </Grid>
        <Grid item xs={4}>
          <Search />
          <Friends item="btn" />
        </Grid>
        <Grid item xs={6}>
          <Chat />
        </Grid>
      </Grid>
    </>
  );
};

export default Message;
