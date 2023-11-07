import { Button, Container, FormControlLabel, MenuItem, Switch, TextField} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import { ENDPOINTS } from '../../../constants/endpoints';
import useFetchApi from '../../../hooks/useFetchApi';
import { useEffect } from 'react';
import useFetchDataApi from '../../../hooks/useFetchDataApi'
import Loading from '../../loading/Loading'
import { METHODS } from "../../../constants/methods";

const FormAdmin = () => {

    const { data: categories, isLoading: isLoadingCategories } = useFetchApi(`${ENDPOINTS.CATEGORY}`);
    
    const { data: cities, isLoading: isLoadingCities} = useFetchApi(`${ENDPOINTS.CITY}/list`);

    const { data, isLoading, error, fetchData } = useFetchDataApi();


    const initialValues = {
        name: '', phone_number: '', recommended: false,
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

    useEffect(() => {
        if (error) {
          Swal.fire({
            title: 'Fallo la creacion',
            icon: 'error',
          });
        }
        if (data) {
          Swal.fire({
            title: 'Usuario creado exitosamente',
            icon: 'success',
          });
        }
      }, [data, error])


    return (
        
        <Container maxWidth="md">

            {(isLoading || isLoadingCategories || isLoadingCities) ? <Loading /> :
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => await fetchData(ENDPOINTS.CLUB, METHODS.POST, values)}
                >
                    {() => (
                    
                        <Form  className={`${styles.form}` }>
                
                                <Field name="name">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Nombre" type="text" name="name" fullWidth className="input-background"/>
                                        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                        
                          
                                <Field name="category.id">
                                    {({ field }) => (
                                        <div>
                                            <TextField {...field} variant="outlined" size="small" label="Categoría" select name="category.id" fullWidth className="input-background">
                                                {categories?.map((category) => (
                                                    <MenuItem key={category.id} value={category.id}>
                                                        {category.title}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <ErrorMessage name="category.id" component="div" style={{ color: 'red' }} />
                                        </div>
                                    )}
                                </Field>
                         


                         
                                <Field name="phone_number">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Telefono" type="text" name="phone_number" fullWidth />
                                        <ErrorMessage name="phone_number" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                       
                            
                        
                                <Field name="address.street">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Calle" type="text" name="address.street" fullWidth />
                                        <ErrorMessage name="address.street" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                         
        
                         
                                <Field name="address.number">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Número" type="number" name="address.number" fullWidth/>
                                        <ErrorMessage name="address.number" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                          

                     
                                <Field name="address.floor">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Piso" type="number" name="address.floor" fullWidth />
                                        <ErrorMessage name="address.floor" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                      

                      
                                <Field name="address.apartment">
                                {({ field }) => (
                                    <div>
                                        <TextField {...field} variant="outlined" size="small" label="Piso" type="text" name="address.apartment" fullWidth />
                                        <ErrorMessage name="address.apartment" component="div" style={{ color: 'red' }} />
                                    </div>
                                )}
                                </Field>
                       
                      
                                <Field name="address.city.id">
                                    {({ field }) => (
                                        <div>
                                            <TextField {...field} variant="outlined" size="small" label="Ciudad" select name="address.city.id" fullWidth >
                                                {cities?.map((city) => (
                                                    <MenuItem key={city.id} value={city.id}>
                                                        {city.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <ErrorMessage name="address.city.id" component="div" style={{ color: 'red' }} />
                                        </div>
                                    )}
                                </Field>
                          

                            
                                <Field name="recommended">
                                    {({ field }) => (
                                        <div>
                                            <FormControlLabel {...field} labelPlacement="start" label="Recomendado" control={<Switch label="Recomandado" name="recommended" className="input-background"/>}/>
                                            <ErrorMessage name="recommended" component="div" style={{ color: 'red' }} />
                                        </div>
                                    )}
                                </Field>
                        

                            {/* 
                                <Field name="address.city.id">
                                    {({ field }) => (
                                        <div>
                                            <TextField {...field} variant="outlined" size="small" type="file" inputProps={{ multiple: true }} name="files" /> 
                                        </div>
                                    )}
                                </Field>
                            */}

                            <Button variant="contained" type="submit">Agregar Club</Button>
                    
                        </Form>
                    )}
                </Formik>
            }
        </Container>
    )
}

export default FormAdmin