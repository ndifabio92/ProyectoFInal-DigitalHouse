import Container from "@mui/material/Box";
import CardProducts from "../products/CardProducts";
import Box from "@mui/material/Box";
import useFetchApi from "../../hooks/useFetchApi";
import Loading from "../loading/Loading";
import { ENDPOINTS } from "../../constants/endpoints";
import { AuthContext } from "../../auth/context";
import { useState } from "react";

const Favorites = ({ userId }) => {

  const [favoritos, setFavoritos] = useState([]);

  const { saveFavorites, favorites } = AuthContext();

  const { data, isLoading } = useFetchApi(
    `${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`
  );

  if (data) {
    setFavoritos(data);
    const idFavoritos = [];
    favoritos.forEach((club) => {
      idFavoritos.push(club.id);
    });
    saveFavorites(idFavoritos);
  }

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
          {favorites?.map((club) => (
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
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Favorites;
