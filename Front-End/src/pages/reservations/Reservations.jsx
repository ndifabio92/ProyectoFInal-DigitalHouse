import { Box, Container, IconButton} from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate, useLocation } from "react-router-dom";
import DataClub from "../../components/Reservations/DataClub";
import FormReservations from "../../components/Reservations/FormREservations";



const Reservations = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const idClub = queryParams.get('idClub')

    const navigate = useNavigate();
      
    const handleGoback = () => {
        navigate(`/club/${idClub}`);
    };

    

    return(
        <Container
        maxWidth="xl"
        sx={{
            mt: "120px",
            mb: "40px",
            color: "#011A5B",
            backgroundColor: "#EDEBEE",
        }}
        >
            <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#FFFFFF",
            backgroundColor: "#FF914D",
            fontSize: "20px",
            fontWeight: "bold",
            paddingLeft: "10px",
            margin: '0px'
            }}>
                <h2> Reservá tu cancha </h2>
                <IconButton
                aria-label="Volver"
                color="#FFFFFF"
                size="large"
                onClick={handleGoback}
                >
                    <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
                </IconButton>
            </Box>
            
                <Box sx={{
                    color: "#011A5B",
                    backgroundColor: "#FFFFFF",
                    margin:'0px', 
                    padding:'40px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly'
                }}>

                    <DataClub idClub={idClub} />
                
                    <FormReservations idClub={idClub} />
                
                </Box> 
            
            
        
        </Container>
    )


}

export default Reservations