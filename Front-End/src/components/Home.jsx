
import { Container } from '@mui/material';
import Categories from './Categories';
import Recomendations from './Recomendations';
import SearchBar from './SearchBar';


function Home() {
  return (
    <Container maxWidth="xxl"
        sx={{
            padding:'0',
            mt:'100px',
            display: 'flex',
            flexDirection: 'column',
            textAlign:'center',
        }}
     >
        <SearchBar/>
        <Categories/>
        <Recomendations/>
    </Container>
  );
}

export default Home;
