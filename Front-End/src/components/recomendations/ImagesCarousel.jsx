import { Container, Box } from '@mui/material'
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';


const ImagesCarousel = ({id}) =>{

    const {data} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

    const newData = data? data.slice(0,4) : []

    return(
        
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: 800,

          }}>
            {newData?.map((image) => (
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
            ))}
        </Container>
    )
}

export default ImagesCarousel