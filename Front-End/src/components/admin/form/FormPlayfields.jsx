import { Button, Container, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';


const FormPlayfields = ({idClub}) => {

    const { data: categories, isLoading: isLoadingCategories, error: categoriesError } = useFetchApi(`${ENDPOINTS.CATEGORY}`);
    

    const initialValues = {
        description: '', idClub: parseInt(idClub), 
        category: {id:''}, 
    }

    const isComplete = (values) => {
        if (
            values.description != '' &&
            values.category.id != '' 
        ){
            return true 
        }
        else{
            return false
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
    });

    const submitForm = async (values) => {

        console.log(values)

            try {
                const response = await fetch('http://localhost:8080/playingField', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                const data = await response.json()

                if (response.ok) {
                    Swal.fire({
                        title: 'Cancha agregada con éxito',
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }).then(() => {
                       console.log("La Solicitur Post se envio correctamente")
                    }) 
                } else {
                    Swal.fire({
                        title: data.error,
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }).then(() => {
                       console.log(data.error)
                    })
                }
            } catch (error) {
                console.log(error)
            }
        
    }

    return (
        
        <Container maxWidth="md">
            
            <form onSubmit={(e) => { 
                e.preventDefault();
                if(isComplete(formik.values)){
                    submitForm(formik.values)
                }
                else{
                    Swal.fire({
                        title: 'Debe completar todos los campos del formulario',
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }) 
                }
            }}  className={`${styles.form}` }>
           
                {
                    formik.touched.description && formik.errors.description && (
                        <span style={{ color: 'red' }}>{formik.errors.description}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Nombre" type="text" name="description" className="input-background"
                    value={formik.values.description}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />


                {
                    formik.touched.category && formik.errors.category && (
                        <span style={{ color: 'red' }}>{formik.errors.category?.id}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Categoria" select name="category.id" className="input-background" 
                    value={formik.values.category.id}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    {categories?.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.title}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="contained" type="submit">Agregar Cancha</Button>
            </form>
            
        </Container>
    )
}

export default FormPlayfields
