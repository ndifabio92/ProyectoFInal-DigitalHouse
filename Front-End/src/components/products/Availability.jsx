import { Container, Box } from '@mui/material'
import Calendar from '../datepicker/Calendar'
import { useState, useEffect } from 'react'
import Loading from '../loading/Loading'
import TableAvailability from '../products/TableAvailability'
import useFetchApi from '../../hooks/useFetchApi'
import { ENDPOINTS } from '../../constants/endpoints'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import dayjs from 'dayjs';

// cuando tenga la consulta de reservas le hago la funcionalidad
const reservations = [
    {"id": 1, "playingField": {"id": 1}, "startDatetime": "SAT, 25 NOV 2023 13:00:00 GMT-0300", "endDatetime": "Sun Nov 25 2023 10:00:00 GMT-0300"},
    {"id": 2, "playingField": {"id": 1}, "startDatetime": "SAN, 26 NOV 2023 10:00:00 GMT-0300", "endDatetime": "Sun Nov 25 2023 11:00:00 GMT-0300"},
    {"id": 3, "playingField": {"id": 2}, "startDatetime": "SAT, 25 NOV 2023 11:00:00 GMT-0300", "endDatetime": "Sun Nov 25 2023 12:00:00 GMT-0300"},
    {"id": 4, "playingField": {"id": 2}, "startDatetime": "SAN, 26 NOV 2023 12:00:00 GMT-0300", "endDatetime": "Sun Nov 25 2023 13:00:00 GMT-0300"},
    {"id": 5, "playingField": {"id": 3}, "startDatetime": "SAT, 25 NOV 2023 13:00:00 GMT-0300", "endDatetime": "Sun Nov 25 2023 14:00:00 GMT-0300"}
    ]

  function CustomTabPanel(props) {
        const { children, value, index, ...other } = props
    
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        )
    }


const Availability = (props) => {

    const {idClub}=props

    const today = dayjs(new Date())
    const [startDate, setStartdate] = useState(today)
    const [endDate, setEnddate] = useState(today)
    const {data: playingfields, isLoading, error} = useFetchApi(`${ENDPOINTS.PLAYINGFIELD}/club/${idClub}`)
    const [period, setPeriod] = useState([today])

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue ) => {
        setValue(newValue);
    };
/*
    const uploadPeriod = () => {
        
        let currentDate = dayjs.utc(startDate);
        const newPeriod = [];

        while (currentDate <= endDate) {
            
            console.log('periodo: ' + period)
            console.log('currentDate: ' + currentDate)
            console.log('endDate: ' + endDate)
            
            newPeriod.push(currentDate)
           // console.log('periodo con currentDate: ' + period)
           currentDate = currentDate.add(1, 'day')
           // console.log('currentDate aumentada en 1: ' + currentDate)
           // console.log(currentDate <= endDate)
        }
        setPeriod(newPeriod);

       // console.log('periodo final: ' + period)
    };

*/
    useEffect(() => {
        
          
          console.log('')
          console.log(startDate)
          console.log(endDate)
     //     uploadPeriod();
        
    }, [startDate, endDate]);
  

    return (
        <> 
        {(isLoading) ? <Loading /> :
            <Container    maxWidth="xl"
                sx={{
                padding:'40px',
                color: "#011A5B",
                backgroundColor: "#FFFFFF",
                textAlign:'center',
                }}>
                    
                <h2>Consultar Disponibilidad</h2>
                <Box sx={{
                    padding:'20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '30px',
                    alignItems:'center',
                    justifyContent: 'space-evenly',
                    color: "#011A5B",
                    backgroundColor: "#FFFFFF",
                }}> 
                    <Calendar label={'Fecha desde'} day={today} setStartdate={setStartdate} type={'start'} />
                    <Calendar label={'Fecha hasta'} day={today} setEnddate={setEnddate} type={'end'} />
                </Box>
                <Box maxWidth="xxl"
                    sx={{
                        backgroundColor: '#FFFFFF',
                        color: '#1F2E7B',
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        direction: 'row',
                        textAlign: 'center',
                        gap: '10px',
                        flexWrap: 'wrap',
                        mt: '40px',
                        padding: '20px'
                    }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                {period.map((date, index) => (
                                    <Tab key={index} label={(date.toString()).slice(0,16)} />
                                ))}
                            </Tabs>
                        </Box>
                        {period.map((date, index) => (
                            <CustomTabPanel key={index} value={value} index={index}>
                                <TableAvailability
                                    playingfields={playingfields}
                                    reservations={reservations.filter(
                                        (reservation) => dayjs(reservation.startDatetime).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD")
                                    )}
                                
                                />
                            </CustomTabPanel>
                        ))}

                </Box>
                
            </Container>
        }
        </>
    )
}

export default Availability