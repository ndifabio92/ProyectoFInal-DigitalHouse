import Container from '@mui/material/Box';
import CardProducts from './CardProducts';
import Box from '@mui/material/Box';
import useFetchApi from '../../hooks/useFetchApi';
import Loading from '../loading/Loading';
import { ENDPOINTS } from '../../constants/endpoints';


const Products = () => {

  const { data, isLoading, error } = useFetchApi(`${ENDPOINTS.RANDOM}`);

  return (
    <Container maxWidth="xl"
      sx={{
        color: '#1F2E7B',
        textAlign: 'center',
        padding: '100px',
        backgroundColor:'#FFFFFF'
      }}
    >
      {
        isLoading ? <Loading />
          :
          <Box sx={{
            color: '#1F2E7B',

            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>

            {
              data?.map((club) => (
                <CardProducts key={club.id} name={club.name} tel={club.phone_number} city={club.address.street + " N° " + club.address.number + ", " + club.address.city.name } id={club.id} />
              ))
            }
          </Box>
      }

    </Container>

  );
}

export default Products;

