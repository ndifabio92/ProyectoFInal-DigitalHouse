import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

const Favorite = ({id, disabled}) => {

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
      <span style={{ padding: '12px', display: 'inline-block' }}>
        {favorites ? (
          <FavoriteIcon style={{ fontSize: '24px' }} />  
        ) : (
          <FavoriteBorderIcon style={{ fontSize: '24px' }} />  
        )}
      </span>
    </IconButton>
  );
};

export default Favorite;
