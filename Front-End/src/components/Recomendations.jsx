import Container from '@mui/material/Box';
import * as React from 'react';
import CardProducts from './CardProducts';
import Box from '@mui/material/Box';
import useDataMock from '../hooks/useDataMock';


function Recomendations() {


  const {data} = useDataMock()


  return (
    <Container maxWidth="xxl"
      sx={{
        margin: '10px',
        color: '#FFFFFF', 
        backgroundColor: '#1F2E7B',
        textAlign:'center',
      }}
     >
      <h2>NUESTRAS RECOMENDACIONES</h2>
      <Box sx={{
        margin: '10px',
        backgroundColor: '#1F2E7B', 
        color: '#1F2E7B',
        display:'flex',
        justifyContent:'space-around',
        textAlign:'center',
        gap:'10px',
        flexWrap:'wrap'
      }}>
        
        {data?.map((reco) => (
        <CardProducts key={reco.id} name={reco.name} url={reco.images[0]} city={reco.location.city}/>
      
      ))}
      </Box>
      

    </Container>
    
  );
}

export default Recomendations;

