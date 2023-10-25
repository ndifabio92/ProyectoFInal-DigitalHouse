
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

const imagenPrinc = './futbol1.png'
const imagenes = ["./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"]

const Images = () => {

  return (
    <Container sx={{
        mx: 'auto',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        justifyContent:'center',
        display: 'flex',
        }}>
      
        <Box maxWidth="xl"
          sx={{  
          }}>
            <img src={imagenPrinc} alt="" />
        </Box>
        <Box maxWidth="xl"
          sx={{  
          }}>
           {imagenes.map((image, imageIndex) => (
                <Box
                    component="img"
                    key={imageIndex}
                    src={image}
                    sx={{
                        maxWidth: 230,
                        maxHeight: 130,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    
                />                          
            ))}
        </Box>
      
    </Container>
  );

  
}

export default Images;