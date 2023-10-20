
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useDataMock from '../../hooks/useDataMock';
import { useState } from 'react';
import { Container } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*
const  data  = [
  {
    "id": 1,
    "name": "LOS AMIGOS FUTBOL 5",
    "images": ["./futbol3.png", "./futbol2.png", "./futbol3.png"],
    "location": {
      "id": 1,
      "city": "Buenos Aires",
      "zip": 1043,
      "street": "Av. Córdoba 4580"
    },
    "phone_number": 111111,
    "playing_field": {
      "id": 1,
      "sports": {
        "id": 1,
        "name": "Futbol"
      }
    }
  },
  {
    "id": 2,
    "name": "LAWN TENIS CLUB",
    "images": ["./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png"],
    "location": {
      "id": 2,
      "city": "Córdoba",
      "zip": 5000,
      "street": "Av. Concepcion Arenales 280"
    },
    "phone_number": 111111,
    "playing_field": {
      "id": 2,
      "sports": {
        "id": 2,
        "name": "Tenis"
      }
    }
  },
  {
    "id": 3,
    "name": "LAS PALETAS CLUB DE PADEL",
    "images": ["./padel1.jpg", "./padel2.jpg", "./padel3.jpg"],
    "location": {
      "id": 3,
      "city": "Mendoza",
      "zip": 5500,
      "street": "Av. Colón 4598"
    },
    "phone_number": 111111,
    "playing_field": {
      "id": 3,
      "sports": {
        "id": 3,
        "name": "Padel"
      }
    }
  },
  {
    "id": 4,
    "name": "SWING NATACION",
    "images": ["./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg"],
    "location": {
      "id": 4,
      "city": "Buenos Aires",
      "zip": 1120,
      "street": "Av. San Martin 3800"
    },
    "phone_number": 111111,
    "playing_field": {
      "id": 4,
      "sports": {
        "id": 4,
        "name": "Natación"
      }
    }
  }
]

*/


const Recomendations = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const { data } = useDataMock();

  const maxSteps = data ? data.length : 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="xl" sx={{
      backgroundColor: '#FFFFFF',
      color: '#1F2E7B',
    }}>

      <h2>Nuestras Recomendaciones</h2>

      {
        data &&
        <Box maxWidth="md"
          sx={{
            mx: 'auto',
            backgroundColor: '#FFFFFF',
            flexGrow: 1,

            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                maxWidth: 800,
                textAlign: 'center',
              }}
            >{data[activeStep].name}</Typography>
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
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          maxWidth: 400,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                        src={club.images[0]}
                      />
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          maxWidth: 400,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                        src={club.images[1]}
                      />

                    </Container>

                  ) : null}
                </div>
              ))
            }
          </AutoPlaySwipeableViews>
          <MobileStepper
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
      }
    </Container>
  );
}

export default Recomendations;


