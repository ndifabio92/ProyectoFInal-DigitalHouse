import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate} from 'react-router-dom'


const pages = ['Crear cuenta', 'Iniciar sesión'];

const Header = () => {

  const navigate = useNavigate()
  
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if(page === 'Crear cuenta' ){
      navigate("/signup")
    } 
    if(page === 'Iniciar sesión' ){
      navigate("/signin")
    } 

    
    setAnchorElNav(null);
  };

  const logo = './logoNaranjaNeg.png'

  return (

    <AppBar position="fixed">
      <Container maxWidth="xxl" sx={{
        padding: '0px',
        margin: '0px',
        backgroundColor: '#1F2E7B',
        height: '100px',

      }}
      >

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              color: 'inherit',
              fontSize: 12,
              alignItems: 'end',
            }}
          >
            <img src={logo} style={{ height: '100px' }} />
            <span>Qué Deporte jugamos hoy? </span>
          </Typography>


          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              mx: '50px',
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={ () => handleCloseNavMenu(page) }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                alignContent: 'rigth',
              }}
            >
              {
                pages.map((page) => (
                  
                  <MenuItem key={page} onClick={ () => handleCloseNavMenu(page) }>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>

        </Toolbar>

      </Container>
    </AppBar>
  );
}
export default Header;
