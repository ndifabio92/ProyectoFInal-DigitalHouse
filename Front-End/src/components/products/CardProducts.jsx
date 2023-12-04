import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../constants/endpoints";
import FavoriteButton from "../favs/FavoriteButton";

const CardProducts = ({ club }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${ENDPOINTS.CLUB}/${club.id}`);

  const imagesURL = club.images.map((image) => ({
    id: `${image.id}`,
    url: `${import.meta.env.VITE_BACKEND_API}image/${club.id}/download/${image.id}`,
  }));

  const imagenPrinc = imagesURL[0]

  console.log(imagenPrinc)

  return (
    <Card
      sx={{
        width: 220,
        height: 400,
        border: "none",
        backgroundColor: "#EDEBEE",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{
          width: 220,
          height: 400,
          border: "none",
          backgroundColor: "#EDEBEE",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            height: "30px",
            padding: "10px",
            margin: "auto",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#1F2E7B",
          }}
        >
          {club.name}
        </Typography>
        <CardMedia
          component="img"
          height={100}
          image={imagenPrinc.url}
          sx={{ margin: "20px" }}
        />

        <CardContent
          sx={{
            border: "none",
            color: "#1F2E7B",
            height: "50px",
            padding: "10px",
          }}
        >
          <Typography variant="p" component="p">
            {`${club.address.street} N° ${club.address.number}, ${club.address.city.name}`}
          </Typography>
          <Typography variant="p" component="p">
            {club.phone_number}
          </Typography>
        </CardContent>
      </CardActionArea>

      <FavoriteButton
        clubId={club.id}
      />
    </Card>
  );
};

export default CardProducts;
