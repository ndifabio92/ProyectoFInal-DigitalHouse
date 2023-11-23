import Container from "@mui/material/Box";
import CardProducts from "../products/CardProducts";
import Box from "@mui/material/Box";
import useFetchApi from "../../hooks/useFetchApi";
import Loading from "../loading/Loading";
import { ENDPOINTS } from "../../constants/endpoints";
import { AuthContext } from "../../auth/context";
import { useEffect } from "react";

const Favorites = ({ userId }) => {

//   const { data, isLoading } = useFetchApi(
//     `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`
//   );

  const { favorites, saveFavorites, isLoading } = AuthContext();
  saveFavorites(userId);

  let favsParseados = JSON.parse(favorites);
  console.log(favsParseados)

useEffect(()=>{
    console.log("Actualizando favoritos");
    //window.location.reload();
}, [favorites])


  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "#1F2E7B",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        padding: "100px",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            mx: "auto",
            backgroundColor: "#FFFFFF",
            color: "#1F2E7B",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {favsParseados?.map((club) => (
            <CardProducts
              key={club.id}
              name={club.name}
              tel={club.phone_number}
              city={
                club.address.street +
                " N° " +
                club.address.number +
                ", " +
                club.address.city.name
              }
              id={club.id}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Favorites;
