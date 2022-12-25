import routes from "constants/routes";
import * as icon from "@mui/icons-material";

const getDrawerIcon = (pathname: string) => {
  switch (pathname) {
    case routes.home:
      return <icon.Home />;
    case routes.favourites:
      return <icon.Favorite />;
  }

  return null;
};

export default getDrawerIcon;
