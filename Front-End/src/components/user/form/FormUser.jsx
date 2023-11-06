import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Container, TextField } from "@mui/material";
import styles from './styles.module.css';
import { validationSchemaUser as validationSchema } from "../../../validations/ValidationSchemaUser"
import Swal from 'sweetalert2';

const FormUser = () => {

  const initialValues = {
    username: '',
    name: '',
    lastname: '',
    password: '',
    roles: ["USER"]
  };


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
        resetForm();
        Swal.fire({
          title: 'Usuario creado exitosamente',
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Confirmar',
      }).then(() => {
        console.log('Usuario creado exitosamente');
    }) 
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
                      <TextField {...field} variant="outlined" size="small" label="Username (email)" fullWidth/>
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