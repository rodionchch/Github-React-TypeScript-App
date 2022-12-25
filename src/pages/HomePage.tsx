import React from "react";
import { useSearchUsersQuery } from "store/github/github.api";
import * as mui from "@mui/material";

import Card from "components/Card";

type HomeProps = {
  enterSearch: string | null;
};

const Home: React.FC<HomeProps> = ({ enterSearch }) => {
  const { isLoading, isError, data } = useSearchUsersQuery(
    enterSearch || "null",
    {
      // skip: enterSearch && enterSearch?.length < 3,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <mui.Grid container spacing={1} columns={20}>
      {data?.map((user) => (
        <mui.Grid key={user?.id} item xs={20} sm={10} md={5} xl={4}>
          <Card user={user} />
        </mui.Grid>
      ))}
    </mui.Grid>
  );
};

export default Home;
