import { Container, Grid} from '@mui/material';
import ImageModal from './ImageModal';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';


const Images = ({id}) => {

  console.log(id)

  const {data} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

  const imagenPrinc = data? data.slice(0,1) : []

  const imagenes = data? data.slice(1,5) : []


  return (
    <>

      <Container maxWidth="xl"
        sx={{
          mx: 'auto',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          display:'center'
        }}
      >
        <Grid container spacing={1}
          sx={{
            mx: 'auto',
            padding: '100px',
            backgroundColor: '#FFFFFF',
            display:'center'
          }}>

          <Grid item xs={12} md={6}>
            <img src={imagenPrinc[0]?.url} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {imagenes?.map((image) => (

                <Grid key={image.id} item xs={6} md={6}>
                  <img src={image.url} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ImageModal images={data} />
    </>

  );
}

export default Images;