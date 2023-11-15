import { Container, Paper, Typography } from "@mui/material";
import { AuthContext } from "../../auth/context";
import Favorites from "../../components/favs/Favorites";

const UserProfile = () => {
  const { userData } = AuthContext();

  return (

    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#1F2E7B",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "10px",
        mt: { xs: "50px", sm: "150px" }, // Ajuste del margen en dispositivos móviles
        padding: "20px", // Ajuste del padding en dispositivos móviles
      }}
    >
      <h2>Hola {userData.name}!</h2>

      <Paper
        elevation={3} // Puedes ajustar el nivel de elevación según tu preferencia
        sx={{
          p: 2,
          backgroundColor: "#f0f0f0", // Color de fondo del Paper
        }}
      >
        <Typography variant="h5" sx={{ color: "#1F2E7B", fontWeight: 'bold' }}>
          Información personal
          <br />
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Nombre: {userData.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Apellido: {userData.lastname}
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Username: {userData.username}
        </Typography>
      </Paper>

      <div>
        <h2>Tus favoritos</h2>
        <Favorites/>
      </div>

    </Container>

  );
};

export default UserProfile;
