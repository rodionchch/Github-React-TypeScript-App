import React from "react";
import * as mui from "@mui/material";

import { IUser } from "models/models";

const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const { login, url, html_url, avatar_url } = user;

  return (
    <mui.Card
      onClick={() => {
        window.open(html_url, "_blank");
      }}
    >
      <mui.CardActionArea>
        <mui.CardMedia
          component="img"
          height="140"
          image={avatar_url}
          alt="green iguana"
        />
        <mui.CardContent>
          <mui.Typography gutterBottom variant="h5" component="div">
            {login}
          </mui.Typography>
          <mui.Typography variant="body2" color="text.secondary">
            {url}
          </mui.Typography>
        </mui.CardContent>
      </mui.CardActionArea>
    </mui.Card>
  );
};

export default Card;
