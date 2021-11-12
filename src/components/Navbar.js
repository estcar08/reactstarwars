import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material/";
import { Switch } from "@mui/material";
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Context } from "../App";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Navbar = ( ) => {
  const classes = useStyle();
  let { handleMode } = useContext(Context);
  console.log(handleMode);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Star Wars Movies
            </Typography>
            <Switch onChange={() => handleMode()} label="Dark Mode"/>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
