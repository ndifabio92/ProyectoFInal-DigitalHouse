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


const ModalConfirm = ({values}) => {

    
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [isOpen, setIsOpen] = useState(false);

   // const { data: user, isLoading: isLoadingUser, error: errorUser} = useFetchApi(`${ENDPOINTS.}`);

   const handleClick = () => {
    setIsOpen(!isOpen)
    }

   
    const confirm = async() => {

      //  await fetchData(ENDPOINTS.RESERVATION, METHODS.POST, values)

      handleClick()
    
    }
    

    return(

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



    )
}

export default ModalConfirm