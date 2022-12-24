import React, { useState } from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

import "../beginer";
import "../advanced";

import AppBar from "./AppBar";
import Card from "./Card";
import BottomNavigation from "./BottomNavigation";

const darkTheme = mui.createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <mui.ThemeProvider theme={darkTheme}>
        <AppBar label={"Hello, world!"} />
        <mui.Grid container spacing={1} columns={12}>
          <mui.Grid item xs={6} sm={4} md={3}>
            <Card />
          </mui.Grid>
        </mui.Grid>

        <BottomNavigation />
      </mui.ThemeProvider>
    </>
  );
};

export default App;
