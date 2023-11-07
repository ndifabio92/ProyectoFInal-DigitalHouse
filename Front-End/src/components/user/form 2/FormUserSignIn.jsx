import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField } from "@mui/material";
import styles from './styles.module.css';
import { validationSchemaUser as validationSchema } from "../../../validations/ValidationSchemaUser"
import Swal from 'sweetalert2';
import useFetchApi from '../../../hooks/useFetchDataApi';
import { ENDPOINTS } from '../../../constants/endpoints';
import { METHODS } from '../../../constants/methods';
import Loading from '../../loading/Loading';
import { useEffect } from 'react';

const FormUserSignIn = () => {
  const { data, isLoading, error, fetchData } = useFetchApi();

  const initialValues = {
    username: '',
    password: '',
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: 'No existe el usuario',
        icon: 'error',
      });
    }
    if (data) {
      Swal.fire({
        title: 'Bienvenido' ,
        icon: 'success',
      });
    }
  }, [data, error])

  


  return (
    <Container maxWidth="md">
      <div>
        <h1>Inicio Sesión</h1>
        {isLoading ? <Loading /> :
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => await fetchData(ENDPOINTS.USER_SIGN_IN, METHODS.GET, values)}
          >
            {() => (
              <Form className={`${styles.form}`}>

                
                  <Field name="username">
                    {({ field }) => (
                      <div>
                        <TextField {...field} variant="outlined" size="small" label="Username (email)" fullWidth 
                        autoComplete="username"/>
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                      </div>
                    )}
                  </Field>


                <div>
                  <Field name="password">
                    {({ field }) => (
                      <div>
                        <TextField {...field} variant="outlined" size="small" label="Contraseña" type="password" fullWidth
                        autoComplete="current-password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                      </div>
                    )}
                  </Field>
                </div>

                <Button variant="contained" type="submit">Ingresar</Button>

              </Form>
            )}
          </Formik>
        }
      </div>
    </Container>
  )
}

export default FormUserSignIn



