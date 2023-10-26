import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { validationSchemaForm as validationSchema } from "../../../validations/ValidationSchemaAdmin";
import styles from './styles.module.css';
import useDataMock from "../../../hooks/useDataMock";
import AWS from 'aws-sdk';



export default function FormAdmin() {

    const [imagenUrl, setImagenUrl] = useState([]);

    useEffect(() => {
       AWS.config.update({
        accessKeyId: 'AKIAY3PLHSUJENAA5T2V',
        secretAccessKey:'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',
        region: 'us-east-1'
        });
        
        const s3 = new AWS.S3();

        const params = {
            Bucket: '1023c05-grupo1',
        };
        s3.listObjectsV2(params, (err, data) => {
            if (err) console.log(err, err.stack);
            else {
                const imagenes = data.Contents.map((imagen) => {
                    return s3.getSignedUrl('getObject', {
                        Bucket: '1023c05-grupo1',
                        Key: imagen.Key,
                        Expires: 60 * 5,
                    });
                });
                setImagenUrl(imagenes);
            }
        });
    }, []);
    console.log(imagenUrl);

    


    const initialValues = { name: '', email: '' }
    const { data } = useDataMock();
    console.log(data)
    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: (values) => {
            // swalAlert('success', 'Send Email', 'Email send Correctly')
            console.log(values)
        }
    })
    return (
        <Container maxWidth="xxl"
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#1F2E7B',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                mt: '150px',
                padding: '40px'
            }}
        >
            <form onSubmit={formik.handleSubmit} className={`${styles.form}`}>
                <TextField variant="outlined" size="small" label="Name" type="text" name="name" className="input-background"
                    value={formik.values.name}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name && (
                    // <Error error={formik.errors.name} />
                    <spam>{formik.errors.name}</spam>
                )}

                <TextField variant="outlined" size="small" label="Email" type="text" name="email" className="input-background"
                    value={formik.values.email}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && (
                    // <Error error={formik.errors.email} />
                    <spam>{formik.errors.email}</spam>
                )}

                <TextField variant="outlined" size="small" type="file" inputProps={{ multiple: true }} onChange={formik.handleChange} name="files" />

                <Button variant="contained" type="submit">Crear Producto</Button>
            </form>
        </Container>
        // <div className={`${styles.container}`}>
        //     <form onSubmit={formik.handleSubmit} className={`${styles.form}`}>
        //         <TextField variant="outlined" size="small" label="Name" type="text" name="name" className="input-background"
        //             value={formik.values.name}
        //             onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //         {formik.touched.name && formik.errors.name && (
        //             // <Error error={formik.errors.name} />
        //             <spam>{formik.errors.name}</spam>
        //         )}

        //         <TextField variant="outlined" size="small" label="Email" type="text" name="email" className="input-background"
        //             value={formik.values.email}
        //             onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //         {formik.touched.email && formik.errors.email && (
        //             // <Error error={formik.errors.email} />
        //             <spam>{formik.errors.email}</spam>
        //         )}

        //         <TextField variant="outlined" size="small" type="file" inputProps={{ multiple: true }} onChange={formik.handleChange} name="files" />

        //         <Button variant="contained" type="submit">Crear Producto</Button>
        //     </form>
        // </div>
    )
}
