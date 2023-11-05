import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchApi from '../../../hooks/useFetchApi';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import Loading from '../../loading/Loading';
import { ENDPOINTS } from '../../../constants/endpoints';
import { useState, useEffect } from 'react';



const TablePlayfields = ({idClub}) => {

    const { data, isLoading, error} = useFetchApi(`${ENDPOINTS.PLAYINGFIELD}/club/${idClub}`);

    const [canchas, setCanchas] = useState([])

    useEffect(() => {
        if (data) {
            setCanchas(data)
        }
    }, [data]);

    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Esta seguro que quiere confirmar la accion?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const response = fetch(`http://localhost:8080/playingField/${id}`, {
                    method: 'DELETE',
                    });
                    if (response) {
                        console.log('Club eliminado con éxito');
                        setCanchas(canchas.filter((cancha) => cancha.id !== id));
                    
                    } else {
                        console.error('Error al eliminar el club:', error);
                    }

                    Swal.fire(
                        'Eliminado',
                        '',
                        'success'
                    )

                } catch (error) {
                    console.error('Error al realizar la solicitud DELETE:', error);
                }
                
            }
        })
    }
   

    const handleChange = (id) => {

    }

    return (
        <Box sx={{ width: "100%" }}>
            {
                isLoading ? <Loading /> :
                    <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer component={Paper}>
                            {canchas &&
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Id</TableCell>
                                            <TableCell align="center">Descripción</TableCell>
                                            <TableCell align="center">Deporte</TableCell>
                                            <TableCell align='center'>Acciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {canchas.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.id}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.description}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.category.title}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center' sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.id)}>Eliminar</Button>
                                                    <Button variant="outlined" startIcon={<SendIcon />} onClick={() => handleChange(row.id)}>Modificar</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            }
                        </TableContainer>
                    </Paper>
            }
        </Box>
    );
}
export default TablePlayfields