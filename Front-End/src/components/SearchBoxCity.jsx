import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const ciudades = [
  { label: "Córdoba"},
  { label: "Mendoza"},
  { label: "Buenos Aires"},


];
 const SearchBoxCity = (props) => {

  const [city, setCity] = React.useState('')

  return (
    <Autocomplete
      disablePortal
      id="searchBoxCity"
      options={ciudades}
      sx={{ 
        width: 200,
        color: '#FF914D',
      }}
      renderInput={(params) => <TextField {...params} label="Ciudad" 
      value={city}
      sx={{color: '#FF914D',}}
      onChange={(newCity) =>{
        setCity(newCity)
        props(newCity)
      }} />}
    />
    

  );
}


export default SearchBoxCity