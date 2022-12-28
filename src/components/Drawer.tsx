import React from "react";
import { useNavigate } from "react-router-dom";
import * as mui from "@mui/material";

import { ToggleDrawer } from "types/Drawer";

import routes from "constants/routes";
import locationLabel from "constants/locationLabel";
import getDrawerIcon from "utils/getDrawerIcon";

type DrawerProps = {
  drawerOpen: boolean;
  toggleDrawer: ToggleDrawer;
};

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
          {Object.values(routes).map((key) => (
            <mui.ListItem key={key} disablePadding>
              <mui.ListItemButton
                onClick={() => {
                  navigate(key);
                  toggleDrawer(false);
                }}
              >
                <mui.ListItemIcon>{getDrawerIcon(key)}</mui.ListItemIcon>
                <mui.ListItemText primary={locationLabel[key]} />
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
