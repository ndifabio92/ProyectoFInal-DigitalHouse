
import { Container } from '@mui/material';
import Categories from './Categories';
import Recomendations from './Recomendations';
import SearchBar from './SearchBar';


function Home() {
  return (
    <Container id='home' maxWidth="xxl"
        sx={{
            padding:'0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            mt:'105px',
            mb:'43px',
            display: 'flex',
            flexDirection: 'column',
            textAlign:'center',
            width: '100%',
        }}
     >
        <SearchBar/>
        <Categories/>
        <Recomendations/>
    </Container>
  );
}

export default Home;
