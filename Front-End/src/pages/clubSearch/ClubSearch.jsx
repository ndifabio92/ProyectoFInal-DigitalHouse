import { Container, IconButton, Box } from '@mui/material';
import Categories from '../../components/categories/Categories';
import Recomendations from '../../components/recomendations/Recomendations';
import SearchBar from '../../components/ui/search/SearchBar';
import Products from '../../components/products/Products';
import SearchResults from '../../components/clubSearch/searchResults';
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate } from "react-router-dom";

const ClubSearch = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container 
    maxWidth="xl"
      sx={{
        padding: '0',
        mt: '120px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
      id='home'
    >
            <IconButton
                aria-label="Volver"
                color="#FFFFFF"
                size="large"
                onClick={handleClick}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: -90,
                }}
            >
                <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
            </IconButton>
            <Categories />
            <SearchResults />
            <Recomendations/>
        </Container>
    );
}

export default ClubSearch;
