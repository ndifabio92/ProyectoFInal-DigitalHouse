import { Box, Container, IconButton} from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate } from "react-router-dom";




const Reservations = () => {

    const navigate = useNavigate();
      
    const handleClick = () => {
        navigate("/");
    };

return(
    <Container
     maxWidth="xl"
      sx={{
        mt: "120px",
        mb: "40px",
        color: "#011A5B",
        backgroundColor: "#FFFFFF",
      }}
    >
        <h1> reservas </h1>
        <IconButton
          aria-label="Volver"
          color="#FFFFFF"
          size="large"
          onClick={handleClick}
        >
          <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
        </IconButton>





    </Container>
)


}

export default Reservations