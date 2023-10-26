import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchApi from '../../../hooks/useFetchApi';
import { Box, Button } from '@mui/material';
import Swal from 'sweetalert2';

const TableAdmin = () => {
    const { data } = useFetchApi('club/list');

    const handleDelete = (id) => {
        console.log(id)
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
                Swal.fire(
                    'Eliminado',
                    '',
                    'success'
                )
            }
        })
    }
    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer component={Paper}>
                    {data &&
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Id</TableCell>
                                    <TableCell align="center">Nombre</TableCell>
                                    <TableCell align="center">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align='center'>
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row" align='center'>
                                            {row.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row" align='center'>
                                            <Button variant="contained" color="error" onClick={() => handleDelete(row.id)}>Eliminar Producto</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </TableContainer>
            </Paper>
        </Box>
    );
}
export default TableAdmin