import React from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

type DrawerProps = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ drawerOpen, toggleDrawer }) => {
  return (
    <mui.Drawer
      open={drawerOpen}
      onClose={() => {
        toggleDrawer();
      }}
    >
      <mui.Box sx={{ width: 250 }} role="presentation">
        <mui.List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <mui.ListItem key={text} disablePadding>
              <mui.ListItemButton>
                <mui.ListItemIcon>
                  {index % 2 === 0 ? <icon.Inbox /> : <icon.Mail />}
                </mui.ListItemIcon>
                <mui.ListItemText primary={text} />
              </mui.ListItemButton>
            </mui.ListItem>
          ))}
        </mui.List>
        <mui.Divider />
        <mui.List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <mui.ListItem key={text} disablePadding>
              <mui.ListItemButton>
                <mui.ListItemIcon>
                  {index % 2 === 0 ? <icon.Inbox /> : <icon.Mail />}
                </mui.ListItemIcon>
                <mui.ListItemText primary={text} />
              </mui.ListItemButton>
            </mui.ListItem>
          ))}
        </mui.List>
      </mui.Box>
    </mui.Drawer>
  );
};

export default Drawer;
