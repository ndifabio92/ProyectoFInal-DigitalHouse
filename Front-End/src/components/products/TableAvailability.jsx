import { Container } from "@mui/material"
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TableAvailability = (props) => {
    
    const {playingfields, reservations} = props

    const isReserved = (playingFieldId, hour) => {
        return reservations.some(
            (reservation) =>
                reservation.playingField.id === playingFieldId &&
                new Date(reservation.startDatetime).getHours() === hour
        );
    };

    return(
        <Container >
            
            <Box sx={{width: '100%', marginTop:'20px' }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
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
                                                {[...Array(15)].map((_, index) => (
                                                <TableCell 
                                                    key={index} 
                                                    sx={{
                                                    backgroundColor: isReserved(row.id, index + 10)
                                                        ? '#D94D46' //rojo
                                                        : '#48A65D', //verde
                                                }}/>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                    </TableContainer>
                </Paper>

            </Box>
        </Container>
        


    )
}

export default TableAvailability