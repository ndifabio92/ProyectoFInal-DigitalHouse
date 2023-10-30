import { useState } from "react";
import { Box, Container } from "@mui/material";
import FormAdmin from "../../components/admin/form/FormAdmin";
import TableAdmin from "../../components/admin/table/TableAdmin";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

const Admin = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xxl"
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#1F2E7B',
                display: 'flex',
                flexDirection: 'column',
                direction: 'row',
                textAlign: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                mt: '150px',
                padding: '40px'
            }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Agregar Producto" />
                    <Tab label="Lista de productos" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FormAdmin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TableAdmin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Container>
    )
}

export default Admin;
