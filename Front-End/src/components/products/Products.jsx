import Container from '@mui/material/Box';
import CardProducts from './CardProducts';
import Box from '@mui/material/Box';
import useFetchApi from '../../hooks/useFetchApi';


const Products = () => {

  const { data, isLoading, error } = useFetchApi('club/list')

  const imagenes = ["./futbol1.png", "./futbol2.png", "./futbol3.png","./futbol4.png","./futbol5.png","./tenis4.png", "./tenis1.png", "./tenis2.png", "./tenis3.png","./tenis4.png","./padel1.jpg", "./padel2.jpg", "./padel3.jpg","./padel4.jpg","./padel5.jpg","./nat1.png", "./nat2.png", "./nat4.jpg","./nat5.jpg","./nata3.jpg"
]


const reduceData = (data) => {
    
  const newData = [];

  const indicesUsados = new Set();
  
    while (newData?.length < 10) {
      const indiceAleatorio = Math.floor(Math.random() * data.length);
  
      if (!indicesUsados.has(indiceAleatorio)) {
        newData.push(data[indiceAleatorio]);
        indicesUsados.add(indiceAleatorio);
      }
    }
  
    return newData;
  }

  
  const nuevoArray = data ? reduceData(data) : []


  return (
    <Container maxWidth="xl"
      sx={{
        color: '#1F2E7B',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        padding: '100px',
      }}
    >
      <h2></h2>
      <Box sx={{
        margin: '30px',
        backgroundColor: '#FFFFFF',
        color: '#1F2E7B',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>

        {
          nuevoArray.map((club) => (
            <CardProducts key={club.id} name={club.name} url={imagenes[club.id]} city={club.adress.city.name} id={club.id}/>
          ))
        }
      </Box>
      
    </Container>

  );
}

export default Products;