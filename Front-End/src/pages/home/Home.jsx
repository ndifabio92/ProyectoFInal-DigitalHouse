import { Container } from '@mui/material';
import Categories from '../../components/categories/Categories';
import Recomendations from '../../components/recomendations/Recomendations';
import SearchBar from '../../components/ui/search/SearchBar';


const Home = () => {
  return (
    <Container maxWidth="xxl"
      sx={{
        padding: '0',
        mt: '100px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <SearchBar />
      <Categories />
      <Recomendations />
    </Container>
  );
}

export default Home;
