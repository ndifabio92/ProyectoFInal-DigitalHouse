import Container from "@mui/material/Box";
import CardProducts from "../products/CardProducts";
import Box from "@mui/material/Box";
import { AuthContext } from "../../auth/context";

const Favorites = ({ userId }) => {

  const { favorites } = AuthContext();

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
          {favorites &&
            favorites?.map((club) => (
              <CardProducts
                key={club?.id}
                name={club?.name}
                tel={club?.phone_number}
                city={
                  club?.address?.street +
                  " N° " +
                  club?.address?.number +
                  ", " +
                  club?.address?.city?.name
                }
                id={club?.id}
              />
            ))}
        </Box>
    </Container>
  );
};

export default Favorites;
