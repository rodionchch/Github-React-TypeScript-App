import React from "react";
import * as mui from "@mui/material";

const Loading: React.FC = () => {
  return (
    <mui.Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <mui.CircularProgress />
    </mui.Box>
  );
  return null;
};

export default Loading;
