import React from "react";
import Navbar from "./components/Navbar";
import GridCont from "./components/Grid";
import Footer from "./components/Footer";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { createContext } from "react";
import { useState } from "react";

export const Context = createContext('false');

function App() {
  const [dark, setDarkMode] = useState(false)

  const handleMode = () => {
    setDarkMode(!dark);
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
    <Context.Provider value={{handleMode}}>
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
