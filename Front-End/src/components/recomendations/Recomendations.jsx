import Carousel from 'react-material-ui-carousel'
import { Container, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

import useFetchApi from '../../hooks/useFetchApi';

const Recomendations = () => {

  const navigate = useNavigate();

  const handleClick = (id) => {

    var idString = id.toString()
    let ruta = ('/club/' + idString);
    navigate(ruta);
  };


  const imagenes = [["./futbol1.png", "./futbol2.png", "./futbol3.png", "./futbol4.png", "./futbol5.png"], ["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png", "./tenis4.png"], ["./padel1.jpg", "./padel2.jpg", "./padel3.jpg", "./padel4.jpg", "./padel5.jpg"], ["./nat1.png", "./nat2.png", "./nat4.jpg", "./nat5.jpg", "./nata3.jpg"], ["./futbol1.png", "./futbol2.png", "./futbol3.png", "./futbol4.png", "./futbol5.png"], ["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png", "./tenis4.png"], ["./padel1.jpg", "./padel2.jpg", "./padel3.jpg", "./padel4.jpg", "./padel5.jpg"], ["./nat1.png", "./nat2.png", "./nat4.jpg", "./nat5.jpg", "./nata3.jpg"], ["./futbol1.png", "./futbol2.png", "./futbol3.png", "./futbol4.png", "./futbol5.png"], ["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png", "./tenis4.png"], ["./padel1.jpg", "./padel2.jpg", "./padel3.jpg", "./padel4.jpg", "./padel5.jpg"], ["./nat1.png", "./nat2.png", "./nat4.jpg", "./nat5.jpg", "./nata3.jpg"]]

  const { data, isLoading, error } = useFetchApi('club/recommended')


  return (
    <Container maxWidth="xl"
      sx={{
        mx: 'auto',
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: '#1F2E7B',
      }}>
      <h2>Nuestras Recomendaciones</h2>

      <Carousel animation='slide' duration={800} navButtonsAlwaysVisible fullHeightHover>
        {
          data && data.map((club, index) => (
            <div key={club.id}>
              <Button onClick={() => handleClick(club.id)}
                sx={{
                  maxWidth: 800,
                  textAlign: 'center',
                  fontSize: '30px',
                  color: '#1F2E7B',
                  fontWeight: 'bold'
                }}
              >
                {club.name}
              </Button>
              <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: 800,

              }}>
                {imagenes[index].map((image, imageIndex) => (
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
