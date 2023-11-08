import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loading from "../../loading/Loading";
import useFetchDataApi from "../../../hooks/useFetchDataApi";
import { validationSchemaUser } from "../../../validations/ValidationSchemaUser";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { ENDPOINTS } from "../../../constants/endpoints";
import { METHODS } from "../../../constants/methods";
import { useDataContext } from "./Context";

const FormUserSignIn = () => {
  const { data, isLoading, error, fetchData } = useFetchDataApi();

  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchemaUser,
    onSubmit: (values) => {
      fetchData(ENDPOINTS.USER_SIGN_IN, METHODS.POST, values);
      
    },
  });

  const { storeData } = useDataContext();

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "No existe el usuario",
        icon: "error",
      });
      console.log(error);
    }
    if (data) {
      console.log(data);
      storeData(data);
      Swal.fire({
        title: "Bienvenido/a!",
        icon: "success",
      });
      sessionStorage.setItem("saludo", "hola");
    }
  }, [data, error]);

  return (
    <Container maxWidth="md">
      <h1>Iniciar sesión</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={formik.handleSubmit} className={`${styles.form}`}>
          <TextField
            variant="outlined"
            size="small"
            label="Username (email)"
            type="email"
            name="username"
            className="input-background"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          )}
          <TextField
            variant="outlined"
            size="small"
            label="Password"
            type="password"
            name="password"
            className="input-background"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          )}

          <Button variant="contained" type="submit">
            Iniciar sesión
          </Button>
        </form>
      )}
    </Container>
  );
};

export default FormUserSignIn;