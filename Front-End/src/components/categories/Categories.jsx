
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import PoolIcon from '@mui/icons-material/Pool';


const categories = [{ id: 1, deporte: 'FUTBOL 5', icon:SportsSoccerIcon}, { id: 2, deporte: 'FUTBOL 7',icon:SportsSoccerIcon },{ id: 3, deporte: 'FUTBOL 9', icon:SportsSoccerIcon },{ id: 4, deporte: 'FUTBOL 11', icon:SportsSoccerIcon }, { id: 5, deporte: 'TENIS', icon: SportsTennisIcon}, { id: 6, deporte: 'PADEL', icon: SportsBaseballIcon }, { id: 7, deporte: 'NATACION', icon: PoolIcon}];

const Categories = () => {

  return (

        <Toolbar disableGutters  sx={{
          padding: '10px',
          marginY: '0px',
          marginX: '0px',
          backgroundColor: '#FF914D',
          color:'#011A5B',
          height: '100px',

          }}
        >

          <Box maxWidth="xl"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              mx: '50px',
              justifyContent: 'center',
              alignContent:'space-between',
            }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                sx={{ 
                  my: 2, 
                  color: '#011A5B', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignContent:'space-around',
                  justifyContent: 'center',}}
              >
                <Box component={category.icon} sx={{marginTop:'20px'}}/>
                <h3> {category.deporte} </h3>
                
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-start',
            }}
          >
           
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Buscar por categorias</InputLabel>
              <Select
                labelId="categorias"
                input={<OutlinedInput label="Buscar por categorias" />}
              >
                {categories.map((categoria) => (
                  <MenuItem
                    key={categoria.id}
                    value={categoria.deporte}
                  >
                    <a> {categoria.deporte} </a>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </Box>

        </Toolbar>

  );
}

export default Categories;