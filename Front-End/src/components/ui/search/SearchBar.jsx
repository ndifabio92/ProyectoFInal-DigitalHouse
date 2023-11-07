import Container from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from '../../../hooks/useForm';
import SelectInput from '../../selectinput/SelectInput';
import Datepicker from '../../datepicker/Datepicker';


const SearchBar = () => {

  const cities = [
    { id: 1, name: "Córdoba" },
    { id: 2, name: "Mendoza" },
    { id: 3, name: "Buenos Aires" },
  ];

  const sports = [
    { id: 1, name: "Fútbol" },
    { id: 2, name: "Tenis" },
    { id: 3, name: "Padel" },
    { id: 4, name: "Natación" },
  ];

  const { values, handleChange } = useForm({
    city: '',
    sport: '',
    date: '',
    time: ''
  });

  return (
    <Container maxWidth="xxl"
      sx={{
        color: '#FF914D',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '50px'
      }}
    >

      <SelectInput handleChange={handleChange} options={cities} name="city" />
      <SelectInput handleChange={handleChange} options={sports} name="sport" />
      <Datepicker handleChange={handleChange} name="date" type="DatePicker" />
      <Datepicker handleChange={handleChange} name="time" type="DatePicker" />
      <Button variant="contained" type='submit'>Buscar Turno</Button>

    </Container >

  );
}

export default SearchBar;
