import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as mui from "@mui/material";
import * as icon from "@mui/icons-material";

import { IUser } from "models/models";
import routes from "constants/routes";
import { generateLink } from "utils/generateLink";
import { useActions } from "hooks/actions";
import { useAppSelector } from "hooks/redux";

const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const { login, url, html_url, avatar_url } = user;

  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFavourite, setIsFavourite] = useState(
    favourites.includes(user.html_url)
  );

  const navigate = useNavigate();

  const onClickRepos = (username: string) => {
    navigate(generateLink(routes.repos, { username }));
  };

  const addToFavourite = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    addFavourite(user.html_url);
  };

  const removeToFavourite = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    removeFavourite(user.html_url);
  };

  return (
    <mui.Card
      onClick={() => {
        onClickRepos(login);
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

          <mui.ListItemButton
            onClick={(event) => {
              if (isFavourite) {
                removeToFavourite(event);
              } else addToFavourite(event);
            }}
            selected={isFavourite}
          >
            <mui.ListItemIcon>
              <icon.Favorite />
            </mui.ListItemIcon>
          </mui.ListItemButton>
        </mui.CardContent>
      </mui.CardActionArea>
    </mui.Card>
  );
};

export default Card;
