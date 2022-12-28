import React from "react";
import { useSearchUsersQuery } from "store/github/github.api";
import * as mui from "@mui/material";

import Card from "components/Card";
import Loading from "components/Loading";

type HomeProps = {
  enterSearch: string | null;
};

const Home: React.FC<HomeProps> = ({ enterSearch }) => {
  const {
    isLoading,
    isError,
    data: users,
  } = useSearchUsersQuery(enterSearch || "null", {
    // skip: enterSearch && enterSearch?.length < 3,
    refetchOnFocus: true,
  });

  if (isLoading) return <Loading />;

  return (
    <mui.Grid container spacing={1} columns={20}>
      {users?.map((user) => (
        <mui.Grid key={user?.id} item xs={20} sm={10} md={5} xl={4}>
          <Card user={user} />
        </mui.Grid>
      ))}
    </mui.Grid>
  );
};

export default Home;
