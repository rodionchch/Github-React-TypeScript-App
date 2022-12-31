import React from "react";
import * as mui from "@mui/material";

import { useAppSelector } from "hooks/redux";
import CardFetch from "components/CardFetch";

const FavouritesPage: React.FC = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites?.length === 0)
    return (
      <mui.Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <mui.Typography  variant="h4">Empty</mui.Typography>
      </mui.Box>
    );

  return (
    <mui.Grid container spacing={1} columns={20}>
      {favourites?.map((username) => (
        <mui.Grid key={username} item xs={20} sm={10} md={5} xl={4}>
          <CardFetch username={username} />
        </mui.Grid>
      ))}
    </mui.Grid>
  );
};

export default FavouritesPage;
