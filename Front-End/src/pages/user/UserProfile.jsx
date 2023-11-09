import { Container } from "@mui/material";
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

        <div>
        <h2>Información Personal</h2>
        
        <p>Numero de cliente: {storedData.id}</p>
        <p>Nombre: {storedData.name}</p>
        <p>Apellido: {storedData.lastname}</p>
        <p>Username: {storedData.username}</p>
        </div>

        <div>
          <h2>Favoritos</h2>
        </div>

      </Container>
    
  );
};

export default UserProfile;
