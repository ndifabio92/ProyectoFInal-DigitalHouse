import { Button, Container } from "@mui/material"
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";



const TableAvailability = (props) => {

    const navigate = useNavigate()
    
    const {playingfields, reservations} = props

    const isReserved = (playingFieldId, hour) => {
        return reservations.some(
            (reservation) =>
                reservation.playingField.id === playingFieldId &&
                new Date(reservation.startDatetime).getHours() === hour
        );
    };

    const handleClick = (idPlayingfield) => {
        navigate(`/reservations/:${idPlayingfield}`)
    }

    return(
        <Container  >
            
            <Box sx={{ marginTop:'20px' }}>
                <Paper sx={{ mb: 2 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'/>
                                    
                                    {[...Array(14)].map((_, index) => (
                                                <TableCell key={index}>{`${index + 10}:00`} - {`${index + 11}:00`}</TableCell>
                                                ))}
                                         
                                </TableRow>
                            </TableHead>
                                    <TableBody>
                                        {playingfields?.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.description}
                                                </TableCell>
                                                {[...Array(14)].map((_, index) => (
                                                <TableCell 
                                                    key={index} 
                                                    sx={{padding:'0px',
                                                        margin:'0px', 
                                                        border:'none',
                                                        
                                                    }}
                                                    >
                                                    <Button 
                                                    sx={{
                                                        height: '50px',
                                                        backgroundColor: isReserved(row.id, index + 10)
                                                            ? '#D94D46' //rojo
                                                            : '#EDEBEE', //verde #48A65D
                                                        ":hover": {
                                                                backgroundColor: '#48A65D'
                                                            }
                                                    }}
                                                    title="Reservar Turno"
                                                    onClick={(e)=>handleClick(row.id)}
                                                    />
                                                </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                    </TableContainer>
                </Paper>
                <p> <span style={{ backgroundColor: '#EDEBEE', width:'10px', color: '#EDEBEE', margin:'5px' }}> ..... </span> Turnos Disponibles</p>
                <p> <span style={{ backgroundColor: '#D94D46',width:'10px', color:'#D94D46', margin:'5px' }}> ..... </span> Turnos No Disponibles</p>                                    
            </Box>
        </Container>
        


    )
}

export default TableAvailability