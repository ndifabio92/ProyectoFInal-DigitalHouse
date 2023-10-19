import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const ciudades = [
  { label: 'Córdoba'},
  { label: "Mendoza"},
  { label: "Buenos Aires"},
];

export default function SearchBoxCity() {

  const [city, setCity] = React.useState('')

  return (
    <Autocomplete
      disablePortal
      id="searchBoxCity"
      options={ciudades}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Ciudad" />}
      value={city}
      onChange={(newCity) => setCity(newCity)}
    />
    

  );
}

