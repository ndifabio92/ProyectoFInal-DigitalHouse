import Container from '@mui/material/Box';
import CardProducts from './CardProducts';
import Box from '@mui/material/Box';
import useDataMock from '../../hooks/useDataMock';


const Products = () => {

  const { data } = useDataMock();

  return (
    <Container maxWidth="xl"
      sx={{
        color: '#1F2E7B',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        padding: '100px',
      }}
    >
      <h2></h2>
      <Box sx={{
        margin: '30px',
        backgroundColor: '#FFFFFF',
        color: '#1F2E7B',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>

        {
          data?.map((club) => (
            <CardProducts key={club.id} name={club.name} url={club.images[0]} city={club.location.city} id={club.id}/>
          ))
        }
      </Box>
      
    </Container>

  );
}

export default Products;

