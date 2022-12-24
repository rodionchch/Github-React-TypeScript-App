import React from "react";
import * as mui from "@mui/material";
import image from "../static/images/cards/contemplative-reptile.jpg";

const Card: React.FC = () => {
  return (
    <mui.Card sx={{ maxWidth: 345 }}>
      <mui.CardActionArea>
        <mui.CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <mui.CardContent>
          <mui.Typography gutterBottom variant="h5" component="div">
            Lizard
          </mui.Typography>
          <mui.Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </mui.Typography>
        </mui.CardContent>
      </mui.CardActionArea>
    </mui.Card>
  );
};

export default Card;
