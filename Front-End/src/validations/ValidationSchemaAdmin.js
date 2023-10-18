import * as Yup from "yup";

export const validationSchemaForm = Yup.object({
    name: Yup.string().trim()
        .required("“Por favor chequea que la información sea correcta”")
        .min(5, "Tiene que tener al menos 5 caracteres"),
    email: Yup.string().email("Tiene que ingresar un Email valido").trim()
        .required("“Por favor chequea que la información sea correcta”")
});