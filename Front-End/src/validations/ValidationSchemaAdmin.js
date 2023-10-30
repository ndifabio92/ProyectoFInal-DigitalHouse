import * as Yup from "yup";

const addressSchema = Yup.object().shape({
    street: Yup.string().required('La calle es obligatoria'),
    number: Yup.string().required('El número es obligatorio'),
    floor: Yup.string().required('El piso es obligatorio'),
    apartment: Yup.string().required('El departamento es obligatorio'),
    city: Yup.string().required('La ciudad es obligatoria'),
});

export const validationSchemaForm = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    phone_number: Yup.number().required('El teléfono es obligatorio'),
    recommended: Yup.boolean(),
    address: addressSchema,
});