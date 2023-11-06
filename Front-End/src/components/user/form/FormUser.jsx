import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField } from "@mui/material";
import * as Yup from 'yup';
import styles from './styles.module.css';


const FormUser = () => {


  const initialValues = {
    username: '',
    name: '',
    lastname: '',
    password: '',
    roles: ["USER"]
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('El username es requerido'),
    name: Yup.string().required('El nombre es requerido'),
    lastname: Yup.string().required('El apellido es requerido'),
    password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
  });

  

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('http://localhost:8080/user/signup' ,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
console.log(values);

      if (response.ok) {
        console.log('Usuario creado exitosamente');
        resetForm();
      
      } 
      
      else {
        console.error('Fallo al crear el usuario');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
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
              <Field name="username">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Username" fullWidth/>
                      <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <div>
              <Field name="name">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Nombre" fullWidth/>
                      <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </div>
                  )}
                </Field>
            </div>

            <div>
              <Field name="lastname">
                  {({ field }) => (
                    <div>
                      <TextField {...field} variant="outlined" size="small" label="Apellido" fullWidth/>
                      <ErrorMessage name="lastname" component="div" style={{ color: 'red' }} />
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