import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material/";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Context } from "../App";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import MovieForm from "./MovieForm";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Navbar = ( ) => {
  const classes = useStyle();
  let { handleMode, handleClickOpenClose } = useContext(Context);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Star Wars Movies
            </Typography>
             <MovieForm/>
            <Button onClick={() => handleClickOpenClose()} color="inherit">Add New Movie</Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="dark mode"
              aria-haspopup="true"
              onClick={handleMode}
              color="inherit"
            >
              <DarkModeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
