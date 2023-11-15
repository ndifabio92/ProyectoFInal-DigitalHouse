import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

const Favorite = ({id}) => {

  const [favorites, setFavorites] = useState(null);

  const handleToggleFavorito = (newFav) => {
    setFavorites(newFav);
    console.log(`La cancha con id ${id} se agregó a favoritos`)
  };

  return (
    <IconButton
      disabled={disabled}
      variant="plain"
      sx={{
        "--IconButton-size": "45px",
      }}
      onClick={handleToggleFavorito} 
      color={favorites ? 'secondary' : 'default'}
    >

        {favorites ? <FavoriteIcon/> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default Favorite;
