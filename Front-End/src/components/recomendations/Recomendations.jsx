<<<<<<< HEAD
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import { Container } from '@mui/material';
import useFetchApi from '../../hooks/useFetchApi';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Recomendations = () => {

  const imagenes = [["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"],["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"],["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png"],["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png"],["./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg"],["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"]]

  const theme = useTheme();
  
  const [activeStep, setActiveStep] = useState(0);

  const { data, isLoading, error } = useFetchApi('club/recommended')

  console.log(data)
=======
import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import useDataMock from '../../hooks/useDataMock';
import { Box } from '@mui/system';

const Recomendations = () => {
  const { data } = useDataMock();
>>>>>>> 2330f84082debcc6c6aef4e988b3c9ab781e7365

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

<<<<<<< HEAD
          <h2>Nuestras Recomendaciones</h2>

          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              color: '#1F2E7B',
              justifyContent:'center',
              bgcolor: 'background.default',
              textAlign: 'center',
            }}
          >
            <Button 
              sx={{
                maxWidth: 800,
                textAlign: 'center',
              }}
            >{data[activeStep].name}</Button>
          </Paper>

          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {
              data.map((club, index) => (
                <div key={club.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Container>
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

                  ) : null}
                </div>
              ))
            }
          </AutoPlaySwipeableViews >
          
          <MobileStepper
            sx={{display:'flex',
              justifyContent:'space-between',
              flexWrap:'nowrap',
              mx:'auto',
              width:'300px',
              textAlign: 'center',
              }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
=======
            </Container>
          </div>
        ))
>>>>>>> 2330f84082debcc6c6aef4e988b3c9ab781e7365
      }
    </Carousel>
  )
}
<<<<<<< HEAD

export default Recomendations;
=======
export default Recomendations
>>>>>>> 2330f84082debcc6c6aef4e988b3c9ab781e7365
