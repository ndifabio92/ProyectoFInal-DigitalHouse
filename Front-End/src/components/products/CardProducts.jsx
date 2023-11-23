
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../constants/endpoints';
import useFetchApi from '../../hooks/useFetchApi';




const CardProducts = ({ name, tel, city, id }) => {

    const navigate = useNavigate();

    const handleClick = () => navigate(`${ENDPOINTS.CLUB}/${id}`);

    const {data} = useFetchApi(`${ENDPOINTS.IMAGES}/${id}`);

    const imagesURL = data?.map((image)=> ({id:`${image.id}`, url:`${import.meta.env.VITE_BACKEND_API}image/${id}/download/${image.id}`}))

    const imagenPrinc = imagesURL? imagesURL[0] : []

    return (
        
        <Card>

            <CardActionArea
                onClick={handleClick}
                sx={{
                    width: 220,
                    height: 300,
                    border: 'none',
                    backgroundColor: '#EDEBEE',
                    display: 'flex',
                    justifyContent:'space-between',
                    flexDirection: 'column'
                }}

            >
                <Typography variant="p" component="p" 
                    sx={{
                        height:'30px', 
                        padding:'10px',
                        margin:'auto',
                        fontSize:'16px',
                        fontWeight:'bold',
                        color: '#1F2E7B',
                    }}>
                        {name}
                </Typography>
                <CardMedia
                    component="img"
                    height={100}
                    image={imagenPrinc.url}
                    sx={{ margin: '20px' }}
                />

                <CardContent sx={{
                    border: 'none',
                    color: '#1F2E7B',
                    height:'50px', 
                    padding: '10px',
                }}>
                    
                    <Typography variant="p" component="p">
                        {city}
                    </Typography>
                    <Typography variant="p" component="p">
                        {tel}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
}

export default CardProducts;