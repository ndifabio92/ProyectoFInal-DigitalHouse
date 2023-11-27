import Container from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from '../../../hooks/useForm';
import SelectInput from '../../selectinput/SelectInput';
import Datepicker from '../../datepicker/Datepicker';
import { useNavigate } from 'react-router-dom';
import useFetchDataApi from '../../../hooks/useFetchDataApi';

const SearchBar = () => {
  const navigate = useNavigate(); 

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

  const { fetchData, error } = useFetchDataApi(); 

  const handleSearch = async () => {
    const requestBody = {
      category: {
        id: 0,
        title: values.sport,
        description: '',
        url: ''
      },
      city: {
        id: 0,
        name: values.city
      },
      datetime: `${values.date}T${values.time}:00.000Z`
    };

    try {
      
      await fetchData('/club/search', 'POST', requestBody);

      
      if (!error) {
        
        navigate('/club/search-results');
      } else {
        
        console.error('Error en la solicitud al backend:', error);
      }
    } catch (error) {
      
      console.error('Error en la solicitud al backend:', error);
    }
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
      <SelectInput handleChange={handleChange} options={cities} name="city" />
      <SelectInput handleChange={handleChange} options={sports} name="sport" />
      <Datepicker handleChange={handleChange} name="date" type="DatePicker" />
      <Datepicker handleChange={handleChange} name="time" type="DatePicker" />
      <Button variant="contained" onClick={handleSearch}>
        Buscar Turno
      </Button>
    </Container>
  );
}

export default SearchBar;
