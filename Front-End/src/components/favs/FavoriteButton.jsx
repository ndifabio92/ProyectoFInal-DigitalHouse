import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchDataApi from "../../hooks/useFetchDataApi";
import { AuthContext } from "../../auth/context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const FavoriteButton = ({ clubId, favoritos, setFavoritos }) => {
  
  const [isFav, setIsFav] = useState(false);

  const { userData, favorites, updateFavorites } = AuthContext();

  const { fetchData } = useFetchDataApi();

  const navigate = useNavigate();

  //const clubResult = useFetchApi(`${ENDPOINTS.CLUB}/${clubId}`);

  //Aca busco en el contexto si existe el clubId que estoy pasando como props
  useEffect(() => {
    console.log("Actualizando favoritos");
    if (favorites.includes(clubId)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favorites]);

  const handleToggleFavorito = async () => {
    try {
      // if (!clubResult) {
      //   console.warn("Datos del club no disponibles");
      //   return;
      // }
      // console.log(clubResult);

      //Chequeo que el user este logueado
      if (!localStorage.getItem("user")) {
        Swal.fire({
          title: "Para modificar tus favoritos por favor iniciá sesión",
          icon: "error",
        }).then(() => {
          navigate("/signin");
        });
      }

      //Traigo del contexto el id del usuario para pasar al POST
      const userId = userData.id;

      //Hago el POST a la base de datos
      await fetchData(
        `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`,
        METHODS.POST,
        //clubResult.data No hace falta mandar el club completo, funciona solo con el id
        clubId
      );

      //A continuacion, ademas del POST hay que agregar o quitar el favorito al/del context
      //con una llamada a updateFavorites
      updateFavorites(clubId);

      //Ahora tengo que eliminar con filter el id de club del estado favoritos del componente Favorites.jsx
      const newFavorites = favoritos.filter((club) => club.id === clubId);
      setFavoritos(newFavorites);
    } catch (error) {
      console.error("Error al manejar favoritos:", error);
    }
  };

  return (
    <IconButton
      variant="plain"
      sx={{
        "--IconButton-size": "45px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={handleToggleFavorito}
    >
      <span style={{ padding: "12px", display: "inline-block" }}>
        {isFav ? (
          <FavoriteIcon
            style={{ fontSize: "24px", color: "FF914D" }}
            variant="solid"
          />
        ) : (
          <FavoriteBorderIcon style={{ fontSize: "24px" }} variant="outlined" />
        )}
      </span>
    </IconButton>
  );
};

export default FavoriteButton;

//const favLocalStorage = localStorage.getItem("favoritos");

//const buscarFavorito = (clubId) => {
//if(localStorage.getItem("favoritos").some(fav => fav.id === clubId))
// if(favLocalStorage.some(fav => fav.id === clubId)){
//   setIsFav(true)
// }
//};
//buscarFavorito(clubId);

// if (favorites.some((fav) => fav.id === clubId)) {
//   setIsFav(true);
//   Swal.fire({
//     title: "Favoritos agregado",
//     icon: "success",
//   });
// } else {
//   setIsFav(false);
//   Swal.fire({
//     title: "Favoritos borrado",
//     icon: "warn",
//   });
// }

//Esta es la solucion de la branch marcar-favorito
// if (window.location.pathname === "/userprofile") {
//   Swal.fire({
//     title: "Favoritos actualizados",
//     icon: "success",
//   }).then(() => {
//     window.location.reload();
//   });
// } else {
//   navigate("/userprofile");
//   Swal.fire({
//     title: "Favoritos actualizados",
//     icon: "success",
//   });
// }
