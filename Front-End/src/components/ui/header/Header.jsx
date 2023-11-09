import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../user/form 2/Context";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const pages = ["Crear cuenta", "Iniciar sesión"];
const settings = ["Perfil", "Cerrar sesión"];

const Header = () => {
  const logo = "./logoNaranjaNeg.png";

  const { storedData, setStoredData } = useDataContext();

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if (page === "Crear cuenta") {
      navigate("/signup");
    }
    if (page === "Iniciar sesión") {
      navigate("/signin");
    }
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Chau!",
      icon: "warning",
    });
    setStoredData(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  //Manejo del menu del user
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Perfil") {
      console.log(storedData);
      navigate("/userprofile");
    }
    if (setting === "Cerrar sesión") {
      handleLogout();
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xxl"
        sx={{
          padding: "0px",
          margin: "0px",
          backgroundColor: "#1F2E7B",
          height: "120px",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            //component="a"
            sx={{
              display: "flex",
              color: "inherit",
              fontSize: 12,
              alignItems: "end",
            }}
          >
            <Link to="/">
              <img src={logo} style={{ height: "100px" }} />
            </Link>

            <div style={{ display: "block" }}>
              <h1>
                canchas<span style={{ color: "#FF914D", margin: 0 }}>365</span>
              </h1>
              <span>¿Qué deporte jugamos hoy? </span>
            </div>
          </Typography>

          {storedData ? (
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                marginRight: 2,
              }}
            >
              <Tooltip title="Ver perfil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ background: "#FF914D" }}>
                    {storedData.name[0] + storedData.lastname[0]}
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  mx: "50px",
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
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
                    display: { xs: "block", md: "none" },
                    alignContent: "rigth",
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => handleCloseNavMenu(page)}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
