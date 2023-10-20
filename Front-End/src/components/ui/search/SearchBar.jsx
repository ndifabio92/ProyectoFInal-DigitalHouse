import { useState } from 'react';
import Container from '@mui/material/Box';
import SearchBoxCity from '../../dropbox/SearchBoxCity';
import SearchBoxSport from '../../dropbox/SearchBoxSport';
import InputDate from '../../date-time/InputDate';
import InputTime from '../../date-time/InputTime';
import Button from '@mui/material/Button';

const SearchBar = () => {
  const [city, setCity] = useState('')
  const [sport, setSport] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleCity = (newCity) => {
    setCity(newCity)
  }
  const handleSport = (newSport) => {
    setSport(newSport)
  }
  const handleDate = (newDate) => {
    setDate(newDate)
  }
  const handleTime = (newTime) => {
    setTime(newTime)
  }

  return (
    <Container maxWidth="xxl"
      sx={{
        color: '#FF914D',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '40px'
      }}
    >

      <SearchBoxCity props={handleCity} />
      <SearchBoxSport props={handleSport} />
      <InputDate props={handleDate} />
      <InputTime props={handleTime} />
      <Button variant="contained" type='submit'>Buscar Turno</Button>

    </Container >

  );
}

export default SearchBar;
