import React, { useState } from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

const BottomNavigation: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <mui.BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <mui.BottomNavigationAction label="Recents" icon={<icon.Restore />} />
      <mui.BottomNavigationAction label="Favorites" icon={<icon.Favorite />} />
      <mui.BottomNavigationAction label="Nearby" icon={<icon.LocationOn />} />
      <mui.BottomNavigationAction label="Folder" icon={<icon.Folder />} />
    </mui.BottomNavigation>
  );
};

export default BottomNavigation;
