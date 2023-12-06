import { Container, Box} from '@mui/material';
import ImageModal from './ImageModal';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';
import Loading from '../loading/Loading';


const Images = ({images, idClub}) => {

 // const {data, isLoading} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

  const imagesURL = images?.map((image)=> ({id:`${image.id}`, url:`${import.meta.env.VITE_BACKEND_API}image/${idClub}/download/${image.id}`}))

  const imagenPrinc = imagesURL? imagesURL.slice(0,1) : []

  const imagenes = imagesURL? imagesURL.slice(1,5) : []


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
      <ImageModal images={imagesURL} />
    </>

  );
}

export default Images;