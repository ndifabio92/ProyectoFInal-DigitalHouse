import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import useFetchDataApi from '../../hooks/useFetchDataApi';
import { METHODS } from '../../constants/methods';
import { ENDPOINTS } from '../../constants/endpoints';
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../auth/context";
import Loading from '../loading/Loading'


const ModalConfirm = ({values, idClub}) => {

    const { userData } = AuthContext();

    const navigate = useNavigate();
    
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [isOpen, setIsOpen] = useState(false);

    const {fetchData, isLoading, error} = useFetchDataApi()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const confirm = async() => {

        await fetchData(ENDPOINTS.RESERVATION, METHODS.POST, values)

        if (error){
            Swal.fire({
                title: error,
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Confirmar',
            }).then(() => {
               console.log(error)
            }
            )
        }
        else{
            Swal.fire({
                title: "Reserva agregada con éxito",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Confirmar',
            }).then(() => {
               console.log("Reserva agregada con éxito")
            }).then(
                navigate(`/club/${idClub}`)
            )
        } 

        

        

    }
    

    return(
        <> 
        { (isLoading)? <Loading/> :
        <React.Fragment>
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
            
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={handleClick}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Confirmación de Reserva
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        aca va todo lo que hay que renderizar en el ModalConfirm

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClick}>
                        Cancelar
                    </Button>
                    <Button onClick={confirm} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            
        </React.Fragment>
        }
        </>
    )
}

export default ModalConfirm