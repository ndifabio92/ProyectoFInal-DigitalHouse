import { useState } from "react";
import { Container, Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AdminCategories from '../../components/admin/Categories/AdminCategories'
import AdminClubes from '../../components/admin/Clubs/AdminClubs'
import AdminUsers from "../../components/admin/Users/AdminUsers.jsx";
import AdminCharacteristics from "../../components/admin/Characteristics/AdminCharacteristics.jsx";



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

    const handleChange = (event, newValue ) => {
        setValue(newValue);
    };


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
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Clubes" />
                        <Tab label="Categorías" />
                        <Tab label="Caracteristícas" />
                        <Tab label="Usuarios" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <AdminClubes />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <AdminCategories />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <AdminCharacteristics />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <AdminUsers />
                </CustomTabPanel>
            </Container>
            <Box
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    color: 'red',
                    padding: '30px',
                    textAlign: 'center',
                    fontSize: '15px',
                    marginY: '150px'
                }}
            >
                <p>Página no disponible desde el tipo de dispositivo desde el que desea acceder</p>
            </Box>

        </>
    )
}

export default Admin;
