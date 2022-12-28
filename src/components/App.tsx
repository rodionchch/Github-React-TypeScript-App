import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import * as mui from "@mui/material";

import "lessons/beginer";
import "lessons/advanced";

import routes from "constants/routes";
import locationLabel from "constants/locationLabel";

import Home from "pages/HomePage";
import FavouritesPage from "pages/FavouritesPage";

import AppBar from "./AppBar";
import BottomNavigation from "./BottomNavigation";
import RepoPage from "pages/RepoPage";

const darkTheme = mui.createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0061fe",
    },
  },
});

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [enterSearch, setEnterSearch] = useState<string | null>(null);

  return (
    <mui.ThemeProvider theme={darkTheme}>
      <Helmet>
        <title>{locationLabel[pathname]}</title>
      </Helmet>
      <AppBar label={locationLabel[pathname]} setEnterSearch={setEnterSearch} />

      <mui.Box padding={1} paddingTop={2} paddingBottom={2}>
        <Routes>
          <Route
            path={routes.home}
            element={<Home enterSearch={enterSearch} />}
          />
          <Route
            path={routes.repos}
            element={<RepoPage enterSearch={enterSearch} />}
          />
          <Route path={routes.favourites} element={<FavouritesPage />} />
        </Routes>
      </mui.Box>
    </mui.ThemeProvider>
  );
};

export default App;
