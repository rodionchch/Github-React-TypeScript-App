import React from "react";
import * as mui from "@mui/material";

import { useAppSelector } from "hooks/redux";
import Card from "components/Card";

const FavouritesPage: React.FC = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites?.length === 0) return <div>null</div>;

  return (
    <mui.Grid container spacing={1} columns={20}>
      {favourites?.map((f) => (
        <>
          <div style={{ width: "100%" }}>{f}</div>
        </>
        // <mui.Grid key={user?.id} item xs={20} sm={10} md={5} xl={4}>
        //   <Card user={user} />
        // </mui.Grid>
      ))}
    </mui.Grid>
  );
};

export default FavouritesPage;
