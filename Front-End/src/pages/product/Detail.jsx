//import useDataMock from '../../hooks/useDataMock';
import { useParams } from 'react-router-dom'
import { Box, Container, IconButton } from '@mui/material';
import useDataMock from '../../hooks/useDataMock';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';


const Detail = () => {

  const {id} = useParams();

  const idAsNumber = parseInt(id);

  const { data } = useDataMock();

  const club = data?.find((club) => club.id === idAsNumber)

  return (
    <Container maxWidth="xl"
      sx={{
        mt: '100px',
        mb: '40px',
        padding:'40px',
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

      
        <p>aca van las imagenes</p>
      
      <Box maxWidth="xs"
        sx={{ 
          border:'2px solid #FF914D',
          textAlign:'center',
          padding:'20px',
        }}
      >
        <p> Domicilio: {club?.location.street}</p>
        <p> Ciudad: {club?.location.city}</p>
        <p> C.P.: {club?.location.zip}</p>
        <p> Teléfono: {club?.phone_number}</p>
      </Box> 

    </Container>
    
  )
}

export default Detail
