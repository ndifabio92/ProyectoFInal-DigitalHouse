import { Container, IconButton } from '@mui/material';
import Categories from '../../components/categories/Categories';
import Recomendations from '../../components/recomendations/Recomendations';
import SearchBar from '../../components/ui/search/SearchBar';
import Products from '../../components/products/Products';
import SearchResults from '../../components/clubSearch/searchResults';

const Home = () => {

  return (
    <Container 
    maxWidth="xl"
      sx={{
        padding: '0',
        mt: '120px',
        mb: '40px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
      id='home'
    >
            <SearchResults />
            <Recomendations/>
            <Products/>
        </Container>
    );
}

export default Home;
