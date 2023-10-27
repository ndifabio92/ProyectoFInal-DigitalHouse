import { useParams } from 'react-router-dom'
import { Box, Container, IconButton } from '@mui/material';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import Images from '../../components/products/Images';
import useFetchApi from '../../hooks/useFetchApi';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/'); 
  };

  const {id} = useParams();

  const { data, isLoading, error } = useFetchApi('club',id)

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
          justifyContent:'space-between',
          color: '#FFFFFF',
          backgroundColor:'#FF914D',
          fontSize:'30px',
          fontWeight:'bold',
          paddingLeft: '20px',

        }} >
        <h4>{data?.name}</h4>
        <IconButton aria-label="Volver" size="large" onClick={handleClick} >
        <ArrowCircleLeftTwoToneIcon fontSize="inherit" color="#1F2E7B" />
        </IconButton>
      </Box>
      <Box maxWidth="xs"
        sx={{ 
          color: '#011A5B',
          backgroundColor:'#FFFFFF',
          textAlign:'left',
          padding:'10px',
          paddingLeft: '150px',
        }}
      >
        <p> Domicilio: {data?.adress?.street}</p>
        <p> Ciudad: {data?.adress?.city?.name}</p>
        <p> Provincia: {data?.adress?.state?.name}</p>
        <p> Teléfono: {data?.phone_number}</p>
      </Box> 
      <Images/>
    </Container>
    
  )
}

export default Detail