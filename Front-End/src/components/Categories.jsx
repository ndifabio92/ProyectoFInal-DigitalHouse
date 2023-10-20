import Container from '@mui/material/Box';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const categories = [{id:1, deporte:'FUTBOL', img:'./futbol4.png'}, {id:2, deporte:'TENIS', img:'./tenis1.png'}, {id:3, deporte:'PADEL', img:'./padel2.jpg'}, {id:4, deporte:'NATACION', img:'./nat4.jpg'}];

function Categories() {
  return (
    <Container maxWidth="xxl"
      sx={{
        margin: '10px',
        backgroundColor: '#FFFFFF', 
        color: '#1F2E7B',
        display:'flex',
        justifyContent:'space-around',
        textAlign:'center',
        gap:'10px',
        flexWrap:'wrap'
      }}
     >
      
      {categories.map((category) => (
        <Container key={category.id}>
          <Card sx={{ maxWidth: 300,
          border:'none' }}>
            <CardActionArea>
            <CardContent>
                <Typography variant="h5" component="h5">
                  {category.deporte}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image={category.img}
              />
            </CardActionArea>
          </Card>
        </Container>
      
      ))}

    </Container>
    
  );
}

export default Categories;