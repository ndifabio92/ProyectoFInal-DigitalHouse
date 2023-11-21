import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchApi from "../../hooks/useFetchApi";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { AuthContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FavoriteButton = ({ props }) => {

  // la idea es recorrer props.favoritos y fijarse si idClub esta incluido dentro de los favoritos, si lo esta setear isFav en true y si no en false

  const [isFav, setIsFav] = useState(false);

  const navigate = useNavigate();

  const { fetchData } = useFetchDataApi();

  const clubResult = useFetchApi(`${ENDPOINTS.CLUB}/${props.clubId}`);

  const { userData } = AuthContext();

  const handleToggleFavorito = async () => {

    try {
      
      if (!clubResult) {
        console.warn("Datos del club no disponibles");
        return;
      } 
      console.log(clubResult);

      if (!localStorage.getItem("user")) {
        Swal.fire({
          title: "Para modificar tus favoritos por favor iniciá sesión",
          icon: "error",
        }).then(() => {
          navigate("/signin");
        });
      } 
      
      const userId = userData.id;
      console.log(userId);

          await fetchData(
            `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`,
            METHODS.POST,
            clubResult.data
          );

          if(isFav){
            setIsFav(false)
            props.setFavoritos( props.favoritos.filter((club) => club.id !== props.clubId))
          }
          else {
            setIsFav(true)
          }

          if (window.location.pathname === "/userprofile") {
            Swal.fire({
              title: "Favoritos actualizados",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          } else {
            navigate("/userprofile");
            Swal.fire({
              title: "Favoritos actualizados",
              icon: "success",
            });
          }
        
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
    >
      <span style={{ padding: "12px", display: "inline-block" }}>
        {
        isFav ? (
          <FavoriteIcon
            style={{ fontSize: "24px", color: "FF914D" }}
            variant="solid"
          />
        ) : (
          <FavoriteBorderIcon style={{ fontSize: "24px" }} variant="outlined" />
        )
        }
      </span>
    </IconButton>
  );
};

export default FavoriteButton;
