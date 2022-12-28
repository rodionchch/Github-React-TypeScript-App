import React from "react";
import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";
import queryString from "query-string";

import { useGetUserReposQuery } from "store/github/github.api";

import Loading from "components/Loading";
import { useParams } from "react-router-dom";

type HomeProps = {
  enterSearch: string | null;
};
const RepoPage: React.FC<HomeProps> = () => {
  const params = useParams();

  const {
    isLoading,
    isError,
    data: repos,
  } = useGetUserReposQuery((params?.username && params?.username) || "", {
    refetchOnFocus: true,
  });

  if (isLoading) return <Loading />;

  return (
    <mui.List
      dense
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
        border: "1px solid gray",
        borderRadius: "4px",
      }}
    >
      {repos?.map(({ id, name, html_url }, index) => (
        <React.Fragment key={id}>
          <mui.ListItem
            key={id}
            component="div"
            disablePadding
            onClick={() => {
              window.open(html_url, "_blank");
            }}
          >
            <mui.ListItemButton>
              <mui.ListItemIcon>
                <icon.Folder />
              </mui.ListItemIcon>
              <mui.ListItemText
                secondary={
                  <React.Fragment>
                    <mui.Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {name}
                    </mui.Typography>
                    {` — ${html_url}`}
                  </React.Fragment>
                }
              />
            </mui.ListItemButton>
          </mui.ListItem>
          {index + 1 !== repos?.length && <mui.Divider component="li" />}
        </React.Fragment>
      ))}
    </mui.List>
  );
};

export default RepoPage;
