import FormUser from '../../components/user/form/FormUser'
import { Container } from "@mui/material";

const User = () => {
  return (
    <div>
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
    <FormUser />
    </Container>
    </div>
  )
}

export default User