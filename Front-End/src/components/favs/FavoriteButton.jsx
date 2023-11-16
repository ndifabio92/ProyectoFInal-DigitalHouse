import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchApi from "../../hooks/useFetchApi";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { AuthContext } from "../../auth/context";

const FavoriteButton = ({ clubId, disabled }) => {
  const [favorites, setFavorites] = useState(null);

  const { userData } = AuthContext();
  const userId = userData.id;

  const club = useFetchApi(`${ENDPOINTS.CLUB}/${clubId}`);
  const { fetchData } = useFetchDataApi();

  const handleToggleFavorito = (club) => {
    fetchData(
      `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`,
      METHODS.POST,
      club
    );
    console.log(`Se agrega este club a favoritos ${club.id}`);
    setFavorites(club);
    //console.log(`La cancha con id ${id} se agregó a favoritos`)
  };

  return (
    <IconButton
      disabled={disabled}
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
