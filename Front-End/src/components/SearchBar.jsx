import Container from '@mui/material/Box';
import SearchBoxCity from './SearchBoxCity';
import SearchBoxSport from './SearchBoxSport';
import InputDate from './InputDate';
import InputTime from './inputTime';

function SearchBar() {
  return (
    <Container maxWidth="xxl"
      sx={{
        color: '#1F2E7B',
        display:'flex',
        flexWrap: 'wrap',
        gap:'20px',
        alignItems:'center',
        justifyContent:'space-around',
        margin: '40px'
      }}
     >
      
      <SearchBoxCity/>
      <SearchBoxSport/>
      <InputDate/>
      <InputTime/>

    </Container>
    
  );
}

export default SearchBar;
