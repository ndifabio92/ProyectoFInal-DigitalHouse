import { useState } from "react";
import { Button, Container, Box } from "@mui/material";
import FormAdmin from "../../components/admin/form/FormAdmin";
import TableAdmin from "../../components/admin/table/TableAdmin";

const Admin = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const viewAdd = () => {
        setShowAdd(!showAdd)
        setShowTable(false)
    }

    const viewTable = () => {
        setShowAdd(false)
        setShowTable(!showTable)
    }
    return (
        <> 
        <Container maxWidth="xxl" 
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#1F2E7B',
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                direction: 'row',
                textAlign: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                mt: '150px',
                padding: '40px'
            }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" onClick={viewAdd}>Agregar Producto</Button>
                <Button variant="outlined" onClick={viewTable}>Lista de productos</Button>
            </div>
            {
                showAdd && (
                    <div style={{ marginTop: '2%', padding: '0% 5% 0%' }}>
                        <FormAdmin />
                    </div>
                )
            }
            {
                showTable && (
                    <div style={{ marginTop: '2%', padding: '0% 5% 0%' }}>
                        <TableAdmin />
                    </div>
                )
            }
        </Container>
        <Box 
            sx={{
            display: { xs: 'block', sm: 'none' },
            color: 'red',
            padding: '30px',
            textAlign:'center',
            fontSize: '15px',
            marginY:'150px'}}
        >
            <p>Pagina no disponible desde el tipo de dispositivo desde el que desea acceder</p>
        </Box>

        </>
    )
}

export default Admin;
