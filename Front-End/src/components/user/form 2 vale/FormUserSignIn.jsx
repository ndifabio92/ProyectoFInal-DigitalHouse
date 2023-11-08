import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField } from "@mui/material";
import styles from './styles.module.css';
import { validationSchemaUser as validationSchema } from "../../../validations/ValidationSchemaUser";
import Swal from 'sweetalert2';
import useFetchApi from '../../../hooks/useFetchDataApi';
import { ENDPOINTS } from '../../../constants/endpoints';
import { METHODS } from '../../../constants/methods';
import Loading from '../../loading/Loading';
import { useEffect } from 'react';
import {  createContext, useState } from 'react';
import { useUserContext } from './UserContext';

// Crear el contexto para los datos del usuario
const UserContext = createContext();

// Crear el proveedor para el contexto del usuario
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataContext = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData: setUserDataContext }}>
      {children}
    </UserContext.Provider>
  );
};



const FormUserSignIn = () => {
  const { setUserData } = useUserContext(); // Obtener la función para establecer los datos del usuario

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
      setUserData(data); // Guardar los datos del usuario en el contexto al obtener respuesta
      Swal.fire({
        title: 'Bienvenido',
        icon: 'success',
      });
    
    }
  }, [data, error, setUserData]);

  return (
    <Container maxWidth="md">
      <div>
        <h1>Inicio Sesión</h1>
        {isLoading ? <Loading /> :
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const userData = await fetchData(ENDPOINTS.USER_SIGN_IN, METHODS.GET, values);
              setUserData(userData); // Guardar los datos del usuario en el contexto
              console.log( userData);
            }}
          >
            {() => (
              <Form className={`${styles.form}`}>
                <Field name="username">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Username (email)" fullWidth autoComplete="username" />
                      <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>

                <div>
                  <Field name="password">
                    {({ field }) => (
                      <div>
                        <TextField {...field} variant="outlined" size="small" label="Contraseña" type="password" fullWidth autoComplete="current-password" />
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
  );
};

export default FormUserSignIn;



