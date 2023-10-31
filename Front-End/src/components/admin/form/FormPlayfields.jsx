import { Button, Container, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';
import { METHODS } from '../../../constants/methods';


const FormPlayfields = ({idClub}) => {

    const sports= [{ id: 1, name: 'FUTBOL 5'}, { id: 2, name: 'FUTBOL 7'},{ id: 3, name: 'FUTBOL 9'},{ id: 4, name: 'FUTBOL 11'}, { id: 5, name: 'TENIS'}, { id: 6, name: 'PADEL'}, { id: 7, name: 'NATACION'}];


    const initialValues = {
        description: '', 
        club: {
            id: {idClub}
        },
        sport: {
            name: ''
        },
    }

    const { data, isLoading, error } = useFetchApi(`${ENDPOINTS.PLAYINGFIELD}`, formik, METHODS.POST);

    //ver si el useFormik me retorna un objeto con los valores cargados
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <Container maxWidth="md">
            <form onSubmit={formik.handleSubmit} className={`${styles.form}` }>
              
                {
                    formik.touched.name && formik.errors.name && (
                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Nombre" type="text" name="name" className="input-background"
                    value={formik.values.description}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                
                <TextField variant="outlined" size="small" label="Ciudad" select name="address.city" className="input-background" 
                    value={formik.values.sports.id}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    {sports.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                

                <Button variant="contained" type="submit">Crear Producto</Button>
            </form>
        </Container>
    )
}

export default FormPlayfields