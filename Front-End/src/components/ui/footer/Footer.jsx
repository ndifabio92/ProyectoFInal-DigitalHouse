import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {

  const logo = './logoNaranjaNeg.png'

  return (
    <Box component="footer"
      maxWidth="xxl"
      sx={{
        display: 'block',
        borderTop: '3px solid #FF914D',
        borderBottom: '3px solid #FF914D',
        backgroundColor: '#1F2E7B',
        height: '40px',
        position: 'fixed',
        bottom: 0,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Container>
        <img src={logo} style={{ height: '30px' }} />
        <span>© 2023 Todos los derechos reservados </span>
      </Container>
    </Box>
  );
}

export default Footer;