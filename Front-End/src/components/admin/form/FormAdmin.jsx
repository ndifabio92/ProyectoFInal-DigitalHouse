import { Button, Container, FormControlLabel, MenuItem, Switch, TextField} from "@mui/material";
import { useFormik } from "formik";
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';
import useFetchDataApi from "../../../hooks/useFetchDataApi";
import { METHODS } from "../../../constants/methods";
import Loading from "../../loading/Loading";


const FormAdmin = (action, club) => {

    const { data: categories, isLoading: isLoadingCategories, error: categoriesError } = useFetchApi(`${ENDPOINTS.CATEGORY}`);
    
    const { data: cities, isLoading: isLoadingCities, error: citiesError } = useFetchApi(`${ENDPOINTS.CITY}/list`);

    const { data, isLoading, error, fetchData } = useFetchDataApi();

    const initialValues = () =>{
        if (action == 'update'){
            return (
            {
                name: club.name, 
                phone_number: club.phone_number, 
                recommended: club.recommended,
                address: {
                    street: club.address.street,
                    number: club.address.number,
                    floor: club.address.floor,
                    apartment: club.address.apartment,
                    city: {
                        id:club.address.city.id,
                    }
                },
                category: {id:club.category.id}, 
                images: club.images
            }
        )}

        else return (
            {
            name: '', 
            phone_number: '', 
            recommended: false,
            address: {
                street: '',
                number: '',
                floor: '',
                apartment: '',
                city: {
                    id:'',
                }, 
            },
            category: {id:''}, 
            images: []
            }
        )
    }

    ////////////// continuar con esto y corregir labels

    const labels = () => {
        if(action == 'update'){
            return ( 
                {description: playfield.description,  
                category: playfield.category.title}
            )
        }
        else{
            return ( 
                {description: 'Descripción',  
                category: 'Categoría'
                }
            )
        }
    }

/////////////////////////////////////////////


    const isComplete = (values) => {
        if (
            values.name != '' &&
            values.category.id != '' &&
            values.phone_number != '' &&
            values.address.street != '' &&
            values.address.number != '' &&
            values.address.city.id != ''
        ){
            return true 
        }
        else{
            return false
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema
    });

    
    const submitFormCreate = async (values) => {

        await fetchData(ENDPOINTS.CLUB, METHODS.POST, values)

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
                        title: 'Club agregado con éxito',
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    }).then(() => {
                       console.log("La Solicitur Post se envio correctamente")
                    }) 
                } 
        
    }

    const submitFormUpdate = async (values) => {

        await fetchData(ENDPOINTS.CLUB, METHODS.PUT, values)

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
                        title: 'Club modificado con éxito',
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

        {(isLoading || isLoadingCategories || isLoadingCities) ? <Loading /> :
            
            <form onSubmit={(e) => { 
                e.preventDefault();
                if(action == 'create' && isComplete(formik.values)){
                    submitFormCreate(formik.values)
                }
                else if (action == 'update'){
                    submitFormUpdate(formik.values)
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
                    formik.touched.name && formik.errors.name && (
                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Nombre" type="text" name="name" className="input-background"
                    value={formik.values.name}
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


                {
                    formik.touched.phone_number && formik.errors.phone_number && (
                        <span style={{ color: 'red' }}>{formik.errors.phone_number}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Telefono" type="text" name="phone_number" className="input-background"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                
              
                {
                    formik.touched.address?.street && formik.errors.address?.street && (
                        <span style={{ color: 'red' }}>{formik.errors.address?.street}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Calle" type="text" name="address.street" className="input-background" 
                    value={formik.values.address?.street}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                

                {
                    formik.touched.address?.number && formik.errors.address?.number && (
                        <span style={{ color: 'red' }}>{formik.errors.address?.number}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Numero" type="number" name="address.number" className="input-background" 
                    value={formik.values.address?.number}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                

                {
                    formik.touched.address?.floor && formik.errors.address?.floor && (
                        <span style={{ color: 'red' }}>{formik.errors.address?.floor}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Piso" type="number" name="address.floor" className="input-background" 
                    value={formik.values.address?.floor}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                

                {
                    formik.touched.address?.apartment && formik.errors.address?.apartment && (
                        <span style={{ color: 'red' }}>{formik.errors.address?.apartment}</span>
                    )
                }
                <TextField variant="outlined" size="small" label="Apartamento" type="text" name="address.apartment" className="input-background" 
                    value={formik.values.address?.apartment}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                

                {
                    formik.touched.address?.city && formik.errors.address?.city && (
                        <span style={{ color: 'red' }}>{formik.errors.address?.city?.id}</span>
                    )
                }
                 <TextField variant="outlined" size="small" label="Ciudad" select name="address.city.id" className="input-background" 
                    value={formik.values.address?.city?.id}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    {cities?.map((city) => (
                        <MenuItem key={city.id} value={city.id}>
                            {city.name}
                        </MenuItem>
                    ))}
                </TextField>


                {
                    formik.touched.recommended && formik.errors.recommended && (
                        <span style={{ color: 'red' }}>{formik.errors.recommended}</span>
                    )
                }
                    <FormControlLabel labelPlacement="start" label="Recomendado" control={<Switch label="Recomandado" name="recommended" className="input-background"
                        checked={formik.values.recommended}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} />}
                    />

                {/* <TextField variant="outlined" size="small" type="file" inputProps={{ multiple: true }} onChange={formik.handleChange} name="files" /> */}

                <Button variant="contained" type="submit">Agregar Club</Button>
            </form>
        }
        </Container>
    )
}

export default FormAdmin