import Container from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import SelectInput from '../../selectinput/SelectInput';
import Datepicker from '../../datepicker/Datepicker';
import { ENDPOINTS } from '../../../constants/endpoints';
import { METHODS } from '../../../constants/methods';
import useFetchApi from '../../../hooks/useFetchApi';
import useFetchDataApi from '../../../hooks/useFetchDataApi';


const SearchBar = () => {

  const navigate = useNavigate();
  const { data: categories, isLoading: isLoadingCategories, error: categoriesError} = useFetchApi(`${ENDPOINTS.CATEGORY}`);
  const { data: cities, isLoading: isLoadingCity, error: cityError} = useFetchApi(`${ENDPOINTS.CITY}`);

  const { data, isLoading, error, fetchData } = useFetchDataApi();

  const clubs = async () => {
    try {
      const result = await fetchData(ENDPOINTS.CLUB_SEARCH, METHODS.POST, ids);
    } catch (error) {
      console.log(error)
    }
  };

  const { values, handleChange } = useForm({
    city: '',
    sport: '',
    date: '',
    time: ''
  });

  const handleClick = () => {
    
    navigate(`/club/search`);
  };

  return (
    <Container 

      sx={{
        color: '#FF914D',
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent:'center',
        padding: '50px'
      }}
    >
      <FormControl sx={{ m: 1, width: 300, display: "flex", gap: 5 }}>
        <InputLabel>Seleccionar categoría</InputLabel>
        <Select
          handleChange={handleChange}
          labelId="categorias"
          input={<OutlinedInput label="Seleccionar categoría" />}
        >
          {categories?.map((category) => (
            <MenuItem
              key={category.id}
              value={category.title}
            >
              {category.title}
            </MenuItem>
          ))}
        </Select>

        <InputLabel>Seleccionar ciudad</InputLabel>
        <Select
          handleChange={handleChange}
          labelId="ciudades"
          input={<OutlinedInput label="Seleccionar ciudad" />}
        >
          {cities?.map((city) => (
            <MenuItem
              key={city.id}
              value={city.name}
            >
              {city.name}
            </MenuItem>
          ))}
        </Select>
        <Datepicker handleChange={handleChange} name="date" type="DatePicker" />
        <Datepicker handleChange={handleChange} name="time" type="DatePicker" />
        <Button variant="contained" onClick={handleClick} type='submit'>Buscar Turno</Button>
      </FormControl>
      {/* <SelectInput handleChange={handleChange} options={cities} name="city" />
      <SelectInput handleChange={handleChange} options={sports} name="sport" /> */}
      {/* <Button variant="contained" type='submit'>Buscar Turno</Button> */}

    </Container >

  );
}

export default SearchBar;
