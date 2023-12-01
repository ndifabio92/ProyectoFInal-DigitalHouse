import Button from '@mui/material/Button';
import dayjs from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocation } from "react-router-dom";
import {  useState } from "react";
import { Box } from '@mui/material';
import useFetchApi from '../../hooks/useFetchApi';
import Loading from '../loading/Loading';
import { ENDPOINTS } from '../../constants/endpoints';
import useAvailability from '../../hooks/useAvailability';
import { useEffect } from 'react';


const FormReservations = ({idClub} ) => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const [date, setDate] = useState(queryParams.get('date')) 

    const [playfieldId, setPlayfieldId] = useState(queryParams.get('idPlayingfield')) 

    const [startDatetime, setStartDatetime] = useState(dayjs(`${date} ${queryParams.get('time')}`).format('YYYY-MM-DD HH:mm'))

    const [endDatetime, setEndDatetime] = useState(dayjs(`${date} ${queryParams.get('time')}`).add(1,'h').format('YYYY-MM-DD HH:mm'))

    const { data: playfields, isLoading: isLoadingPlayfields, error: errorPlayfields} = useFetchApi(`${ENDPOINTS.PLAYINGFIELD}/club/${idClub}`);

    const { reservations, period, showMessage } = useAvailability(idClub, startDatetime, endDatetime);

    const message = "No Disponible";

   

    useEffect(() => {
        setStartDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(startDatetime).format('HH:mm')}`)
        setEndDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(endDatetime).format('HH:mm')}`)
    }, [date]);

    useEffect(() => {
       reservations
       isReserved
    }, [startDatetime, endDatetime]);



    const isReserved = (idPlayfield) => {

        return reservations?.some((reservation) => {

            const day = `${dayjs(startDatetime).format('YYYY-MM-DD')}`
            const dayR = `${dayjs(reservation.startDatetime).format('YYYY-MM-DD')}`

            const startHH = parseInt(dayjs(startDatetime).format('HH')) 
            const startRH = parseInt(dayjs(reservation.startDatetime).format('HH'))

            const endHH = parseInt(dayjs(endDatetime).format('HH')) 
            const endRH = parseInt(dayjs(reservation.endDatetime).format('HH'))

            return (reservation.playingField.id == idPlayfield && day === dayR && (startHH <= startRH  && endHH >= endRH)) 
        }) 
        
    };

    console.log(isReserved())



    //--------------------------------
    
    
    //---------------------------------------------

    // aca se arma el objeto para el post... ver bien como deberia quedar armado cuando este el back
    // controlar y corregir las propiedades del objeto y el formato de los tipos de datos, en especial los de fecha y hora
    // se dejan asi solo a modo de ejemplo!!!!!!!!!!!!!!!!!!!!!!!!!!!
 

    const values= {
        playfield: { id: playfieldId },
        startDatetime: startDatetime ,
        endDatetime: endDatetime
    };

    //---------------------------------------------

    const handleClick = () => {

        // aca tengo que hacer la logica para pasar a la confirmacion de la reserva
        //puedo hacerlo con un model

        console.log(values.startDatetime)
        console.log(values.endDatetime)
        console.log(values.playfield.id)
        console.log(reservations)
    }


return (
    <> 
        {(isLoadingPlayfields)?<Loading/>:
        <FormControl sx={{
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
                        sx={{width:'200px', textAlign:'center'}}
                        label="Hora de inicio"
                        value={dayjs(startDatetime)}
                        onChange={(newValue) => setStartDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(newValue).format('HH:mm')}`)}
                        format="HH:00"
                    />
                    <TimeField
                        sx={{width:'200px', textAlign:'center'}}
                        label="Hora de finalizacion"
                        value={dayjs(endDatetime)}
                        onChange={(newValue) => setEndDatetime(`${dayjs(date).format('YYYY-MM-DD')} ${dayjs(newValue).format('HH:mm')}`)}
                        format="HH:00"
                    />
                    <Select
                        sx={{width:'200px', textAlign:'center'}}
                        id="Playfield"
                        value={playfieldId}
                        onChange={(newValue) => setPlayfieldId(newValue.target.value)}
                    >
                    {playfields?.map((playfield) => (
                        <MenuItem 
                            value={isReserved(playfield.id)? '': playfield.description}
                            key={playfield.id}
                            disabled={isReserved(playfield.id)}
                        >
                        {isReserved(playfield.id)? 'Cancha no Disponible': playfield.description}
                        </MenuItem>
                    ))}
                    </Select>  
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
       
        </FormControl>
        }
     </>
)}

export default FormReservations