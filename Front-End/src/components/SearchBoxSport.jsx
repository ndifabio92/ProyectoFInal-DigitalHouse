import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from '@mui/material';


const sports = [
  { label: 'Fútbol'},
  { label: "Tenis"},
  { label: "Padel"},
  { label: "Natación"},
];

export default function SearchBoxSport() {

  const [sport, setSport] = React.useState('')

  return (
      <Autocomplete
      disablePortal
      id="searchBoxSport"
      options={sports}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Deporte"
      value={sport}
      onChange={(newSport) => setSport(newSport)}/>}
    />
    
  );
}