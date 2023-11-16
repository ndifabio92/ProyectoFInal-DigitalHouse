import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchApi from "../../hooks/useFetchApi";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { AuthContext } from "../../auth/context";

const FavoriteButton = ({ clubId }) => {

  const [favorites, setFavorites] = useState(null);
  
  const { userData } = AuthContext();
  const userId = userData.id;

  const { fetchData } = useFetchDataApi();
  const club = useFetchApi(`${ENDPOINTS.CLUB}/${clubId}`);
  console.log(club)

  const handleToggleFavorito = () => {

    fetchData(
      `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`,
      METHODS.POST,
      club.data
    );
    console.log(`Se agrega este club a favoritos ${clubId}`);
    setFavorites(club.data);
  };

  return (
    <IconButton
      variant="plain"
      sx={{
        "--IconButton-size": "45px",
      }}
      onClick={handleToggleFavorito}
      //color={favorites ? 'secondary' : 'default'}
    >
      <span style={{ padding: "12px", display: "inline-block" }}>
        {favorites ? (
          <FavoriteIcon style={{ fontSize: "24px" }} />
        ) : (
          <FavoriteBorderIcon style={{ fontSize: "24px" }} />
        )}
      </span>
    </IconButton>
  );
};

export default FavoriteButton;
