import React, { useState } from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

import Drawer from "./Drawer";

const AppBar: React.FC<{ label: string }> = ({ label }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open?: boolean) => {
    setDrawerOpen(open !== undefined ? open : !drawerOpen);
  };

  return (
    <>
      <Drawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      <mui.AppBar position="static" color="primary" enableColorOnDark={false}>
        <mui.Toolbar>
          <mui.IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              toggleDrawer();
            }}
          >
            <icon.Menu />
          </mui.IconButton>
          <mui.Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {label}
          </mui.Typography>
        </mui.Toolbar>
      </mui.AppBar>
    </>
  );
};

export default AppBar;
