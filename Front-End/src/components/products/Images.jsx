
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

const imagenPrinc = '../futbol1.png'
const imagenes = ["../futbol2.png", "../futbol3.png","../futbol4.png","../futbol5.png"]

const Images = () => {

  return (
    <Container maxWidth="xl" sx={{
        mx: 'auto',
        textAlign: 'center',
        justifyContent:'center',
        display: 'flex',
        padding:'40px',
        backgroundColor:'#EDEBEE',
        border:'2px solid #FF914D',
        }}>
      
        <Box 
          sx={{  
            width: '400px',
            height: '400px',
          }}>
            <img src={imagenPrinc} height={'100%'} alt="" />
        </Box>
        <Box 
          sx={{  
            width: '400px',
            height: '400px',
            display: 'flex',
            flexWrap:'wrap',
          }}>
           {imagenes.map((image, imageIndex) => (
              <Box
                component="img"
                key={imageIndex}
                src={image}
                sx={{
                  width: '50%',
              }}
                    
            />                          
            ))}
        </Box>
      
    </Container>
  );

  
}

export default Images;