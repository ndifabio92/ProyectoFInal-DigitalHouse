import FormUser from '../../components/user/form/FormUser'
import { Container } from "@mui/material";

const User = () => {
  return (
    <div>
        <Container maxWidth="xxl"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1F2E7B',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                  mt: { xs: '50px', sm: '150px' }, // Ajuste del margen en dispositivos móviles
                  padding: '20px', // Ajuste del padding en dispositivos móviles
                }}>
    <FormUser />
    </Container>
    </div>
  )
}

export default User