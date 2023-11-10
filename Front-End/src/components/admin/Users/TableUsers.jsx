import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchApi from '../../../hooks/useFetchApi';
import { Box} from '@mui/material';
import Loading from '../../loading/Loading';
import {ENDPOINTS} from '../../../constants/endpoints'
import { useState, useEffect } from 'react';
import { useFormik } from "formik";




const TableUsers = () => {

    // -------CORREGIR EL ENDPOINT --------
    
    const { data, isLoading, error} = useFetchApi(`${ENDPOINTS.USERS}`); 

    // ------------------------------------


    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data) {
            setUsers(data)
        }
    }, [data]);

    const modificar = (id) => {
        
    }


    return (
        <Box sx={{ width: "100%" }}>
            {
                isLoading  ? <Loading /> :
                    <Paper sx={{ width: "100%", mb: 2 }}>
                        <TableContainer component={Paper}>
                            {users &&
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Id</TableCell>
                                            <TableCell align='center'>UserName</TableCell>
                                            <TableCell align="center">Nombre</TableCell>
                                            <TableCell align="center">Apellido</TableCell>
                                            <TableCell align='center'>Roles</TableCell>
                                            <TableCell align='center'>Aciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users?.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.id}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.username}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.lastname}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.roles?.map((rol) =>(
                                                         <spam key={rol.id}> {rol.name} </spam> 
                                                        ))
                                                    }
                                                </TableCell>
                                                <TableCell component="th" scope="row" align='center'>
                                                    //aca va el boton para hacer admin 
                                                    
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
export default TableUsers