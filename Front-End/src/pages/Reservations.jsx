import { Box, Container, IconButton} from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate, useLocation } from "react-router-dom";
import {  useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { ENDPOINTS } from "../constants/endpoints";
import { METHODS } from "../constants/methods";
import Loading from "../components/loading/Loading";
import Button from '@mui/material/Button';
import dayjs from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeField } from '@mui/x-date-pickers/TimeField';


const Reservations = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const [date, setDate] = useState(queryParams.get('date')) 

    const [playfieldId, setPlayfieldId] = useState(queryParams.get('idPlayingfield')) 

    const [startDatetime, setStartDatetime] = useState(dayjs(`${date} ${queryParams.get('time')}`).format('YYYY-MM-DD HH:mm'))

    const [endDatetime, setEndDatetime] = useState(dayjs(`${date} ${queryParams.get('time')}`).add(1,'h').format('YYYY-MM-DD HH:mm'))

    const idClub = queryParams.get('idClub')

    const { data: club, isLoading: isLoadingClub , error: errorClub } = useFetchApi(`${ENDPOINTS.CLUB}`, METHODS.GET, idClub)

    const { data: clubImages } = useFetchApi(`${ENDPOINTS.IMAGES}/${idClub}`);

    const imagesURL = clubImages?.map((image) => ({
        id: `${image.id}`,
        url: `${import.meta.env.VITE_BACKEND_API}image/${idClub}/download/${image.id}`,
    }));

  const imagenPrinc = imagesURL ? imagesURL[0] : [];

    // aca se arma el objeto para el post... ver bien como deberia quedar armado cuando este el back
    // controlar y corregir las propiedades del objeto y el formato de los tipos de datos, en especial los de fecha y hora
    // se dejan asi solo a modo de ejemplo!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
    const values= {
        playfield: { id: playfieldId },
        startDatetime: startDatetime ,
        endDatetime: endDatetime
    };

    const navigate = useNavigate();
      
    const handleGoback = () => {
        navigate(`/club/${idClub}`);
    };

    const handleClick = () => {
        console.log(values.startDatetime)
        console.log(values.endDatetime)
    }

    console.log(dayjs(`${date} ${queryParams.get('time')}`).format('YYYY-MM-DD HH:mm'))
    console.log(dayjs(`${date} ${queryParams.get('time')}`).add(1,'h').format('YYYY-MM-DD HH:mm'))

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
                <h2> Reserva tu cancha </h2>
                <IconButton
                aria-label="Volver"
                color="#FFFFFF"
                size="large"
                onClick={handleGoback}
                >
                    <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
                </IconButton>
            </Box>
            {
            (isLoadingClub)?<Loading/>:
            <Box sx={{
                color: "#011A5B",
                backgroundColor: "#FFFFFF",
                margin:'0px', 
                padding:'40px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
            }}>

                {/*
                    aca poner:
                    - formulario de reserva con: 
                        - select de canchas disponibles con cancha preseleccionada
                        - datepicker con fecha preseleccionada
                        - datepicker de hora Desde con horario preseleccionado
                        - datepicker de hora Hasta con horario preseleccionado
                        - Boton de Reservar que me lleve a la confirmacion de Reservas  
            
                */}
                <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignContent:'flex-start',
                        width:250,
                    }}>
                    <Box>
                        <img 
                            src={imagenPrinc.url}
                            width={'100%'}
                        />
                    </Box> 
                     
                    { club &&
                        <Box sx={{
                            textAlign:'center'
                        }}>
                            <h2> {club?.name} </h2>
                            <p> {club.phone_number} </p>
                            <p> {club.address?.street} N° {club.address?.number} </p>
                            <p> {club.address?.city?.name} </p>
                            
                        </Box>
                    }
                    
                </Box>

                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems:'center',
                        }}>
            
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer 
                                components={['DatePicker', 'TimeField', 'TimeField']}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap:'wrap',
                                    justifyContent: 'space-around',
                                    alignItems:'center',
                                    gap:'20px',
                                    }}
                            >
                                <DateCalendar
                                    disablePast                           
                                    label='Fecha'
                                    views={['year', 'month', 'day']}
                                    value={dayjs(date)}
                                    onChange={(newValue) => {setDate(dayjs(newValue).format('YYYY-MM-DD HH:mm'))}}
                                />
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems:'center',
                                    gap:'20px',
                                }}> 
                                <TimeField
                                    label="Hora de inicio"
                                    value={dayjs(startDatetime)}
                                    onChange={(newValue) => setStartDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(newValue).format('HH:mm')}`)}
                                    format="HH:00"
                                />
                                <TimeField
                                    label="Hora de finalizacion"
                                    value={dayjs(endDatetime)}
                                    onChange={(newValue) => setEndDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(newValue).format('HH:mm')}`)}
                                    format="HH:00"
                                />
                                <Select></Select>
                                </Box>
                            </DemoContainer>
                    </LocalizationProvider>
                       

                    <Button 
                        variant="contained" 
                        onClick={handleClick} 
                        type='submit'
                        sx={{
                            marginX:'auto'
                            }}
                    >
                        Reservar
                    </Button>
                </Box>
                

            </Box> 
            }
            
        
        </Container>
    )


}

export default Reservations