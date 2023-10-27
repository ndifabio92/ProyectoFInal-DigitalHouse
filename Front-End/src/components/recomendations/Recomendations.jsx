import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import useNavigate from '../../hooks/useNavigate';
import { Box, Button } from '@mui/system';

const Recomendations = () => {

  const imagenes = [["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"],["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"],["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"]]

  const navigate = useNavigate();

  const { data, isLoading, error } = useFetchApi('club/recommended')

  const handleClick = (id) => {

    var idString = id.toString()
    let ruta = ('/club/' + idString);
    navigate(ruta); 
  };

  return (
    <Container>
      <h2>Nuestras Recomendaciones</h2>

      <Carousel animation='slide' duration={800} navButtonsAlwaysVisible fullHeightHover>
        {
          data && data.map((club) => (
            <div key={club.id}>
              <Button onClick={() => handleClick()}> {club.name} </Button>
              <Container>
                {imagenes.map((image, imageIndex) => (
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
    </Container>
  )
}
export default Recomendations