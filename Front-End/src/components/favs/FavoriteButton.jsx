import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchApi from "../../hooks/useFetchApi";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { AuthContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";

const FavoriteButton = ({ clubId }) => {

  const [favorites, setFavorites] = useState(null);

  const { userData } = AuthContext();
  const userId = userData.id;

  const navigate = useNavigate();
  
  const { fetchData } = useFetchDataApi();
  const clubResult = useFetchApi(`${ENDPOINTS.CLUB}/${clubId}`);
  
  const handleToggleFavorito = async () => {    
    
    try {
      if (!clubResult) {
        console.warn("Datos del club no disponibles");
        return;
      }

      console.log(clubResult);
      await fetchData(
        `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`,
        METHODS.POST,
        clubResult.data
      );
      console.log(`Se agrega/quita este club a favoritos ${clubId}`);
      setFavorites(true);
      navigate("/userprofile");

    } catch (error) {
      console.error("Error al manejar favoritos:", error);
    }
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
          <FavoriteIcon style={{ fontSize: "24px" }} variant='solid' />
        ) : (
          <FavoriteBorderIcon style={{ fontSize: "24px" }} variant='outlined'/>
        )}
      </span>
    </IconButton>
  );
};

export default FavoriteButton;
