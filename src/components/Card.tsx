import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as mui from "@mui/material";

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
    favourites.includes(user.login)
  );

  const navigate = useNavigate();

  const onClickRepos = (username: string) => {
    navigate(generateLink(routes.repos, { username }));
  };

  const onFavourite = useCallback(() => {
    if (isFavourite) {
      removeFavourite(user.login);
      setIsFavourite(false);
    } else {
      addFavourite(user.login);
      setIsFavourite(true);
    }
  }, [isFavourite, user.html_url]);

  return (
    <mui.Card>
      <mui.CardActionArea
        onClick={() => {
          onClickRepos(login);
        }}
      >
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
          <mui.Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {url}
          </mui.Typography>
        </mui.CardContent>
      </mui.CardActionArea>

      <mui.CardActions>
        <mui.Button onClick={onFavourite}>
          {isFavourite ? "Remove" : "Add"}
        </mui.Button>
      </mui.CardActions>
    </mui.Card>
  );
};

export default Card;
