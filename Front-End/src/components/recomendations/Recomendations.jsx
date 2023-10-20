import Container from '@mui/material/Box';
import CardProducts from '../products/CardProducts';
import Box from '@mui/material/Box';
import useDataMock from '../../hooks/useDataMock';


const Recomendations = () => {

  const { data } = useDataMock();

  return (
    <Container maxWidth="xxl"
      sx={{
        color: '#FFFFFF',
        backgroundColor: '#1F2E7B',
        textAlign: 'center',
      }}
    >
      <h2>NUESTRAS RECOMENDACIONES</h2>
      <Box sx={{
        margin: '30px',
        backgroundColor: '#1F2E7B',
        color: '#1F2E7B',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>

        {
          data?.map((reco) => (
            <CardProducts key={reco.id} name={reco.name} url={reco.images[0]} city={reco.location.city} />
          ))
        }
      </Box>


    </Container>

  );
}

export default Recomendations;

