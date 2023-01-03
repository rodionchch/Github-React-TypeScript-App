import React from "react";
import { useNavigate } from "react-router-dom";
import * as mui from "@mui/material";

import { ToggleDrawer } from "types/Drawer";

import routes from "constants/routes";
import getDrawerIcon from "utils/getDrawerIcon";

type DrawerProps = {
  drawerOpen: boolean;
  toggleDrawer: ToggleDrawer;
};

const menu = [
  { label: "Home", pathname: routes.home },
  { label: "Favourites", pathname: routes.favourites },
];

const Drawer: React.FC<DrawerProps> = ({ drawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  return (
    <mui.Drawer
      open={drawerOpen}
      onClose={() => {
        toggleDrawer(false);
      }}
    >
      <mui.Box sx={{ width: 250 }} role="presentation">
        <mui.List>
          {menu.map(({ label, pathname }) => (
            <mui.ListItem key={pathname} disablePadding>
              <mui.ListItemButton
                onClick={() => {
                  navigate(pathname);
                  toggleDrawer(false);
                }}
              >
                <mui.ListItemIcon>{getDrawerIcon(pathname)}</mui.ListItemIcon>
                <mui.ListItemText primary={label} />
              </mui.ListItemButton>
            </mui.ListItem>
          ))}
        </mui.List>
        <mui.Divider />
      </mui.Box>
    </mui.Drawer>
  );
};

export default Drawer;
