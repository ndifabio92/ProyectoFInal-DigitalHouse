import { Container, Box } from '@mui/material'
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';
import Loading from '../loading/Loading';


const ImagesCarousel = ({id}) =>{

    const {data, isLoading} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

    const imagesURL = data?.map((image)=> ({id:`${image.id}`, url:`${import.meta.env.VITE_BACKEND_API}image/${id}/download/${image.id}`}))

    const newData = imagesURL? imagesURL.slice(0,4) : []

    return(
      <>
      { isLoading? <Loading/> :
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: 800,
            backgroundColor:'#FFFFFF'

          }}>
          {
            newData?.map((image) => (
              <Box
                component="img"
                key={image.id}
                sx={{
                  maxWidth: 230,
                  maxHeight: 130,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={image.url}
              />
            ))
          }
        </Container>
      }
      </>
    )
   
} 

export default ImagesCarousel