import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Container, TextField } from "@mui/material";
import styles from "./styles.module.css";
import { validationSchemaUser as validationSchema } from "../../../validations/ValidationSchemaUser";
import Swal from "sweetalert2";
import useFetchDataApi from "../../../hooks/useFetchDataApi";
import { ENDPOINTS } from "../../../constants/endpoints";
import { METHODS } from "../../../constants/methods";
import Loading from "../../loading/Loading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormUser = () => {
  const { data, isLoading, error, fetchData } = useFetchDataApi();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    name: "",
    lastname: "",
    password: "",
    roles: ["USER"],
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Fallo la creacion",
        icon: "error",
      });
    }
    if (data) {
      Swal.fire({
        title: "Usuario creado exitosamente",
        icon: "success",
      });
      navigate("/signin");
    }
  }, [data, error]);

  return (
    <Container maxWidth="md">
      <div>
        <h1>Crear Usuario</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) =>
              await fetchData(ENDPOINTS.USER_CREATE, METHODS.POST, values)
            }
          >
            {() => (
              <Form className={`${styles.form}`}>
                <div>
                  <Field name="username">
                    {({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          label="Username (email)"
                          fullWidth
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    )}
                  </Field>
                </div>

                <div>
                  <Field name="name">
                    {({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          label="Nombre"
                          fullWidth
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    )}
                  </Field>
                </div>

                <div>
                  <Field name="lastname">
                    {({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          label="Apellido"
                          fullWidth
                        />
                        <ErrorMessage
                          name="lastname"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    )}
                  </Field>
                </div>

                <div>
                  <Field name="password">
                    {({ field }) => (
                      <div>
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          label="Contraseña"
                          type="password"
                          fullWidth
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    )}
                  </Field>
                </div>

                <Button variant="contained" type="submit">
                  Registrarse
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </Container>
  );
};

export default FormUser;
