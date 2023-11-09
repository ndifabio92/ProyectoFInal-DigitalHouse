import { Container, Paper, Typography } from "@mui/material";
import { useDataContext } from "../../components/user/form 2/Context";



const UserProfile = () => {
  const {storedData} = useDataContext();

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
        <h1>Perfil del usuario</h1>

        <Paper
        elevation={3} // Puedes ajustar el nivel de elevación según tu preferencia
        sx={{
          p: 2,
          backgroundColor: "#f0f0f0", // Color de fondo del Paper
        }}
      >
        <Typography variant="h5" sx={{ color: "#1F2E7B", fontWeight: 'bold' }}>
          Información Personal
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Numero de cliente: {storedData.id}
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Nombre: {storedData.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Apellido: {storedData.lastname}
        </Typography>
        <Typography variant="body1" sx={{ color: "#1F2E7B" }}>
          Username: {storedData.username}
        </Typography>
      </Paper>

        <div>
          <h2>Favoritos</h2>
        </div>

      </Container>
    
  );
};

export default UserProfile;
