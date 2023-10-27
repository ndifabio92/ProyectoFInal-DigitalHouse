import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import useDataMock from '../../hooks/useDataMock';
import { Box } from '@mui/system';

const Recomendations = () => {
  const { data } = useDataMock();

  return (
    <Carousel animation='slide' duration={800} navButtonsAlwaysVisible fullHeightHover>
      {
        data && data.map((club) => (
          <div key={club.id}>
            <Container>
              {club.images.map((image, imageIndex) => (
                <Box
                  component="img"
                  key={imageIndex}
                  sx={{
                    maxWidth: 230,
                    maxHeight: 130,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={image}
                />
              ))}

            </Container>
          </div>
        ))
      }
    </Carousel>
  )
}
export default Recomendations