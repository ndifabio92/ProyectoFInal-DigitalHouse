import Container from "@mui/material/Box";
import CardProducts from "./CardProducts";
import Box from "@mui/material/Box";
import useFetchApi from "../../hooks/useFetchApi";
import Loading from "../loading/Loading";
import { ENDPOINTS } from "../../constants/endpoints";
import { useEffect, useState } from "react";
import { AuthContext } from "../../auth/context";

const Products = () => {

  const [favoritos, setFavoritos] = useState([]);

  const { favorites } = AuthContext();

  const { data , isLoading, error } = useFetchApi(`${ENDPOINTS.RANDOM}`);
  
  useEffect(() => {
    if (data !== null && localStorage.getItem("user")) {
      setFavoritos(favorites);
    }
  }, [data, favorites]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "#1F2E7B",
        textAlign: "center",
        padding: "100px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            color: "#1F2E7B",

            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {data?.map((club) => (
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

export default Products;
