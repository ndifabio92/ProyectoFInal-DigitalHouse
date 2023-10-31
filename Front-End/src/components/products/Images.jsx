import { Container, Grid} from '@mui/material';
import ImageModal from './ImageModal';


const imagenPrinc = '../futbol1.png';
const imagenes = ["../futbol2.png", "../futbol3.png", "../futbol4.png", "../futbol5.png"];
const imagenes2 = ["../futbol1.png", "../futbol2.png", "../futbol3.png", "../futbol4.png", "../futbol5.png", "../tenis4.png", "../tenis1.png", "../tenis2.png", "../tenis3.png", "../tenis4.png", "../padel1.jpg", "../padel2.jpg", "../padel3.jpg", "../padel4.jpg", "../padel5.jpg", "../nat1.png", "../nat2.png", "../nat4.jpg", "../nat5.jpg", "../nata3.jpg"]


const Images = () => {
  return (
    <>

      <Container maxWidth="xl"
        sx={{
          mx: 'auto',
          padding: '40px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Grid container spacing={1}>

          <Grid item xs={12} md={6}>
            <img src={imagenPrinc} alt="" style={{ width: '100%', height: '100%' }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {imagenes.map((image, imageIndex) => (

                <Grid key={imageIndex} item xs={6} md={6}>
                  <img src={image} alt="" style={{ width: '100%', height: '100%' }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ImageModal images={imagenes2} />
    </>

  );
}

export default Images;