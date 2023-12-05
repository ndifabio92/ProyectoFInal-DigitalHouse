import { Container } from '@mui/material';
import Categories from '../../components/categories/Categories';
import Recomendations from '../../components/recomendations/Recomendations';
import SearchBar from '../../components/ui/search/SearchBar';
import Products from '../../components/products/Products';
import Politics from "../../components/politics/Politics";

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
      <Categories/>
      <SearchBar/>
      <Recomendations/>
      <Products/>
      <Politics/>
    </Container>
  );
}

export default Home;
