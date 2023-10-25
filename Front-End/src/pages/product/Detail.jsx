import { useParams } from 'react-router-dom'
import { Box, Container, IconButton } from '@mui/material';
import { useState, useEffect} from 'react';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import Images from './Images';

const Detail = () => {

  const {id} = useParams();

  const [club, setClub] = useState();
  const getData = async () => {
    const data = await
    fetch('http://localhost:8080/club/'+ id)
    const convert = await data.json();
    setClub(convert)
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <Container maxWidth="xl"
      sx={{
        mt: '100px',
        mb: '40px',
        padding:'10px',
        color: '#011A5B',
        backgroundColor:'#EDEBEE',
      }}
    >
    
      <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
        }} >
        <h2>{club?.name}</h2>
        <IconButton aria-label="Volver" size="large" >
        <ArrowCircleLeftTwoToneIcon fontSize="inherit" color="#1F2E7B" />
        </IconButton>
      </Box>

      <Images/>
      
      <Box maxWidth="xs"
        sx={{ 
          border:'2px solid #FF914D',
          color: '#FFFFFF',
          backgroundColor:'#FF914D',
          textAlign:'center',
          padding:'10px',
        }}
      >
        <p> Domicilio: {club?.adress?.street}</p>
        <p> Ciudad: {club?.adress?.city?.name}</p>
        <p> Provincia: {club?.adress?.state?.name}</p>
        <p> Teléfono: {club?.phone_number}</p>
      </Box> 

    </Container>
    
  )
}

export default Detail