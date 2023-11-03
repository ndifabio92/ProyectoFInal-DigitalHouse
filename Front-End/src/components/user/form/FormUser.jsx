import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField } from "@mui/material";
import * as Yup from 'yup';
import styles from './styles.module.css';

const FormUser = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
  });

  
  const onSubmit = (values) => {
    console.log(values);
  };
  

  return (
    <Container maxWidth="md">
    <div>
    <h1>Crear Usuario</h1>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={`${styles.form}` }>
            <div>
              <Field name="firstName">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Nombre" fullWidth/>
                      <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <div>
              <Field name="lastName">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Apellido" fullWidth/>
                      <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <div>
            <Field name="email">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Correo Electrónico" fullWidth/>
                      <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <div>
            <Field name="password">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Contraseña" type="password" fullWidth/>
                      <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <Button variant="contained" type="submit">Registrarse</Button>
          </Form>
        )}
      </Formik>
    </div>
    </Container>
  )
}

export default FormUser