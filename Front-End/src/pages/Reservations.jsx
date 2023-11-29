import { Box, Container, IconButton} from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate, useLocation } from "react-router-dom";
import {  useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { ENDPOINTS } from "../constants/endpoints";
import { METHODS } from "../constants/methods";
import CardProducts from "../components/products/CardProducts";


const Reservations = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const [playfieldId, setPlayfieldId] = useState(+queryParams.get('idPlayingfield')) 

    const [startDatetime, setStartdatetime] = useState(`${queryParams.get('date')} ${queryParams.get('time')}`)

    const [endDateTime, setEndDatetime] = useState(`${queryParams.get('date')} ${queryParams.get('time')}`)

    const { data: playfield, isLoading: isLoadingPlayfield , error: errorPlayfield } = useFetchApi(`${ENDPOINTS.PLAYINGFIELD}`, METHODS.GET, playfieldId)

    const idClub = playfield?.idClub

    const { data: club, isLoading: isLoadingClub , error: errorClub } = useFetchApi(`${ENDPOINTS.CLUB}`, METHODS.GET, idClub)

    // aca se arma el objeto para el post... ver bien como deberia quedar armado cuando este el back
    // controlar y corregir las propiedades del objeto y el formato de los tipos de datos, en especial los de fecha y hora
    // se dejan asi solo a modo de ejemplo!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
    const values = {
        playfield: { id: playfieldId },
        starDatetime: startDatetime,
        endDatetime: endDateTime
    };

    const navigate = useNavigate();
      
    const handleClick = () => {
        navigate("/club/");
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
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#FFFFFF",
          backgroundColor: "#FF914D",
          fontSize: "30px",
          fontWeight: "bold",
          paddingLeft: "20px",
          margin: '0px'
        }}>
            <h1> Reserva tu cancha </h1>
            <IconButton
            aria-label="Volver"
            color="#FFFFFF"
            size="large"
            onClick={handleClick}
            >
                <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
            </IconButton>
        </Box>

        <Box>
            {club? &&
                <CardProducts 
                    name={club?.name}
                    tel={club?.phone_number}
                    city={`${club?.address?.street} N° ${club?.address?.number}, ${club?.address?.city?.name}`}
                    id={club?.id}
                />
            }
        </Box>
       
    </Container>
)


}

export default Reservations