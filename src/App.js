import React from "react";
import Navbar from "./components/Navbar";
import GridCont from "./components/Grid";
import Footer from "./components/Footer";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { createContext } from "react";
import { useState } from "react";
import { img } from "./resources/movies-img";

export const Context = createContext('false');

function App() {
  const [dark, setDarkMode] = useState(false)
  const [alert, setAlert] = useState(false)
  const [data, setData] = useState([]);
  const [images, setImg] = useState(img);
  const handleMode = () => {
    setDarkMode(!dark);
  };

  const handleAlert = () => {
    setAlert(!alert);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpenClose = () => {
    setOpen(!open);
  };

  const theme = createTheme({
	paper: {
		width: "100%",
		height: "100%",
		backgroundColor: 'grey'
	},
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  return (
    <Context.Provider value={{handleMode, handleClickOpenClose, open, data, setData,images, setImg,handleAlert,alert}}>
      <ThemeProvider theme={theme}>
        <Paper>
          <Navbar />
          <GridCont />
          <Footer />
        </Paper>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
