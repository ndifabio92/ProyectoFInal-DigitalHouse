
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../constants/endpoints';

const CardProducts = ({ name, tel, url, city, id }) => {

    const navigate = useNavigate();

    const handleClick = () => navigate(`${ENDPOINTS.CLUB}/${id}`);

    return (
        <Card>

            <CardActionArea
                onClick={handleClick}
                sx={{
                    width: 600,
                    height: 200,
                    border: 'none',
                    backgroundColor: '#EDEBEE',
                    padding: '20',
                    display: 'flex',
                    flexDirection: 'row'
                }}

            >
                <CardMedia
                    component="img"
                    height={150}
                    image={url}
                    sx={{ margin: '20px' }}
                />

                <CardContent sx={{
                    width: 600,
                    border: 'none',
                    color: '#1F2E7B',
                    padding: '10',
                }}>
                    <Typography variant="h5" component="h3">
                        {name}
                    </Typography>
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