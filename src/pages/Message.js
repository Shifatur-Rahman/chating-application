import React from "react";
import { Grid } from "@mui/material";
import Leftbar from "../components/Leftbar";
import Search from "../components/Search";
import Friends from "../components/Friends";
import Chat from "../components/Chat";

const Message = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Leftbar active="message" />
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
