import Container from '@mui/material/Box';
import SearchBoxCity from './SearchBoxCity';
import SearchBoxSport from './SearchBoxSport';
import InputDate from './InputDate';
import InputTime from './inputTime';
import Button from '@mui/material/Button';
import * as React from 'react';

const SearchBar = () => {

  const [city, setCity] = React.useState('')
  const [sport, setSport] = React.useState('')
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')

    function handleCity(newCity){
      setCity(newCity)
    }
    function handleSport(newSport){
      setSport(newSport)
    }
    function handleDate(newDate){
      setDate(newDate)
    }
    function handleTime(newTime){
      setTime(newTime)
    }

  return (
    <Container maxWidth="xxl"
      sx={{
        color: '#FF914D',
        display:'flex',
        flexWrap: 'wrap',
        gap:'20px',
        alignItems:'center',
        justifyContent:'space-around',
        margin: '40px'
      }}
     >
      
      <SearchBoxCity props = {handleCity}/>
      <SearchBoxSport props = {handleSport}/>
      <InputDate props = {handleDate}/>
      <InputTime props = {handleTime}/>
      <Button variant="contained" type='submit'>Buscar Turno</Button>

    </Container>
    
  );
}

export default SearchBar;
