import { Container, Box} from '@mui/material';
import ImageModal from './ImageModal';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';


const Images = ({id}) => {

  const {data} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

  const imagenPrinc = data? data.slice(0,1) : []

  const imagenes = data? data.slice(1,5) : []


  return (
    <>

      <Container maxWidth="xl"
        sx={{
          mx: 'auto',
          marginY:'0px',
          backgroundColor: '#FFFFFF',
          display:'flex',
          padding: '50px',
          gap:'0px',
          justifyContent:'center',
          alignItems:'center',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{
          width: '400px', height: '400px'
        }} >
          <img src={imagenPrinc[0]?.url} alt="" style={{ objectFit: 'cover', width: '400px', height: '400px' }} />
        </Box>

          <Box  
            sx={{height:'400px', 
            width: '400px',
            display:'flex',
            flexWrap: 'wrap',
            
          }}>
              {imagenes?.map((image) => (
                <img key={image.id} src={image.url} alt="" style={{ objectFit: 'cover', width: '200px', height: '200px' }} />
              ))}
          </Box>
        
      </Container>
      <ImageModal images={data} />
    </>

  );
}

export default Images;