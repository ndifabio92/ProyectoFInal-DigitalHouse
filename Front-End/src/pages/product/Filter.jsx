
import Container from '@mui/material/Box';
import CardProducts from '../../components/products/CardProducts';
import Box from '@mui/material/Box';
import useFetchDataApi from '../../hooks/useFetchDataApi';
import Loading from '../../components/loading/Loading'
import { ENDPOINTS } from '../../constants/endpoints';
import { IconButton } from '@mui/material';
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { METHODS } from '../../constants/methods';
import { useEffect } from 'react';


const Filter = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading, error, fetchData } = useFetchDataApi();

  const clubs = async () => {
    try {
      const result = await fetchData(ENDPOINTS.CLUB_BY_CATEGORY, METHODS.POST, [{id}]);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    clubs();
  }, []);

  const goBack = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="xl"
      sx={{
        color: '#1F2E7B',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        padding: '120px',
      }}
    >
      {
        isLoading ? <Loading />
          :
        <> 
          <IconButton
          aria-label="Volver"
          color="#FFFFFF"
          size="large"
          onClick={goBack}
          sx={{
            position: 'absolute',
            right: 10,
            }}
          >
              <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
          </IconButton>

          <Box sx={{
            mx: 'auto',
            my:'50px',
            backgroundColor: '#FFFFFF',
            color: '#1F2E7B',
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            
            { clubs && data?.map((club) => (
                <CardProducts key={club.id} name={club.name} tel={club.phone_number} city={club.address.street + " N° " + club.address.number + ", " + club.address.city.name } id={club.id} />
              ))
            }
          </Box>
        </>
      }

    </Container>

  );




}
export default Filter
