import { Container, Grid, Button, Box } from '@mui/material';
import React from 'react';

const imagenPrinc = '../futbol1.png';
const imagenes = ["../futbol2.png", "../futbol3.png", "../futbol4.png", "../futbol5.png"];

const Images = () => {
  return (
    <Container maxWidth="xl" 
      sx={{
        mx: 'auto',
        padding: '40px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Grid container spacing={1}>

        <Grid item xs={12} md={6}>
          <img src={imagenPrinc} alt="" style={{ width: '100%', height:'100%'}} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {imagenes.map((image, imageIndex) => (
              <Grid key={imageIndex} item xs={6} md={6}>
                <img src={image} alt="" style={{ width: '100%', height:'100%'}} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{
          textAlign:'left',
          margin: '10px',
          display:'flex',
          justifyContent:'flex-end'
        }}>
        <Button 
        variant="contained"
        sx={{
          padding: '10px',
        }}
      >
        Ver Mas
      </Button>
      </Box>
      

    </Container>
  );
}

export default Images;