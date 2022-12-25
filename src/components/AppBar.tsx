import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

import { ToggleDrawer } from "types/Drawer";

import { useDebounce } from "hooks/debounce";

import Drawer from "./Drawer";

type AppBarProps = {
  label: string;
  setEnterSearch: (search: string | null) => void;
};

const AppBar: React.FC<AppBarProps> = ({ label, setEnterSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  // const debounced = useDebounce(search, 6 00);

  const toggleDrawer: ToggleDrawer = (open) => {
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
          <mui.TextField
            id="search-input"
            label="Search"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEnterSearch(search.length < 3 ? null : search);
              }
            }}
          />
        </mui.Toolbar>
      </mui.AppBar>
    </>
  );
};

export default AppBar;
