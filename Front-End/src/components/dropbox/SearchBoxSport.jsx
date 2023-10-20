import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const sports = [
  { label: "Fútbol" },
  { label: "Tenis" },
  { label: "Padel" },
  { label: "Natación" },
];

const SearchBoxSport = (props) => {
  const [sport, setSport] = useState('');

  return (
    <Autocomplete
      disablePortal
      id="searchBoxSport"
      options={sports}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Deporte"
        value={sport}
        onChange={(newSport) => {
          setSport(newSport)
          props(newSport)
        }} />}
    />

  );
}

export default SearchBoxSport