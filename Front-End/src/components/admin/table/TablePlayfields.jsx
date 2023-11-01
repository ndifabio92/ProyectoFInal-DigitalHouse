import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchApi from '../../../hooks/useFetchApi';
import { Box, Container, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import Loading from '../../loading/Loading';
import { useParams } from 'react-router-dom'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import { useNavigate } from 'react-router-dom';
import TitleClub from '../../products/TitleClub';



const TablePlayfields = () => {

    const {id} = useParams();

    const { data, isLoading, error } = useFetchApi('playingField/club',id)

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin');
      };
    
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
                Swal.fire(
                    'Eliminado',
                    '',
                    'success'
                )

            }
        })
    }

    const handleAdd = () => {    

    }

    const handleChange = (id) => {    

    }


    return (
        <Container sx={{ width: "100%", marginTop:'150px', marginBottom:'40px' }}>
            <IconButton aria-label="Volver" color='#FFFFFF' size="large" onClick={handleClick} sx={{position:'absolute', right:'10px', top:'100px', display:'block'}} >
                <ArrowCircleLeftTwoToneIcon fontSize="large" color='#FFFFFF' />
            </IconButton>
            <Box sx={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
                    <TitleClub id={id}/>
                <Button variant="contained" size="small" onClick={() => handleAdd()}> Agregar Cancha </Button>
            </Box>
            {
                isLoading ? <Loading /> :
                    <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer component={Paper}>
                            {data &&
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Id</TableCell>
                                            <TableCell align='center'>Deporte</TableCell>
                                            <TableCell align="center">Descripcion</TableCell>
                                            <TableCell align='center'>Acciones</TableCell>
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
                                                    {row.sport.name}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                {row.description} 
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center' sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                                    <Button variant="outlined" startIcon={<SendIcon/>} onClick={() => handleChange(row.id)}>Modificar</Button>
                                                    <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={() => handleDelete(row.id)}>Eliminar</Button>
                                                </TableCell>
                                                
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            }
                        </TableContainer>
                    </Paper>
            }
        </Container>
    );
}
export default TablePlayfields