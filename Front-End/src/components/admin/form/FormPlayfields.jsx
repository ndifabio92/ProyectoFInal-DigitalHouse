import { Button, Container, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';
import useFetchDataApi from "../../../hooks/useFetchDataApi";
import { METHODS } from "../../../constants/methods";
import Loading from "../../loading/Loading";


const FormPlayfields = ({idClub}) => {

    const { data: categories, isLoading: isLoadingCategories, error: categoriesError } = useFetchApi(`${ENDPOINTS.CATEGORY}`);
    
    const { data, isLoading, error, fetchData } = useFetchDataApi();

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

        await fetchData(ENDPOINTS.PLAYINGFIELD, METHODS.POST, values)

                if (error) {
                    Swal.fire({
                        title: error,
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }).then(() => {
                       console.log(error)
                    })

                } else {
                    Swal.fire({
                        title: 'Cancha agregada con éxito',
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }).then(() => {
                       console.log("La Solicitur Post se envio correctamente")
                    }) 
                }
         
    }

    return (
        
        <Container maxWidth="md">

        {(isLoading || isLoadingCategories) ? <Loading /> :
            
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
        }   
        </Container>
    )
}

export default FormPlayfields
