import { useParams } from "react-router-dom";
import { Box, Container, IconButton, Grid } from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import Typography from '@mui/material/Typography';
import Images from "../../components/products/Images";
import useFetchApi from "../../hooks/useFetchApi";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from '../../constants/methods';

const Detail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const { id } = useParams();

  const { data, isLoading, error } = useFetchApi(`${ENDPOINTS.CLUB}`,METHODS.GET, id);
  const { data: characteristicsData } = useFetchApi(`${ENDPOINTS.CHARACTERISTIC}`,METHODS.GET);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "100px",
        mb: "40px",
        padding: "10px",
        color: "#011A5B",
        backgroundColor: "#EDEBEE",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#FFFFFF",
          backgroundColor: "#FF914D",
          fontSize: "30px",
          fontWeight: "bold",
          paddingLeft: "20px",
        }}
      >
        <h4>{data?.name}</h4>
        <IconButton
          aria-label="Volver"
          color="#FFFFFF"
          size="large"
          onClick={handleClick}
        >
          <ArrowCircleLeftTwoToneIcon fontSize="large" color="#FFFFFF" />
        </IconButton>
      </Box>
      <Box
        maxWidth="xs"
        sx={{
          color: "#011A5B",
          backgroundColor: "#FFFFFF",
          textAlign: "left",
          padding: "10px",
          paddingLeft: "150px",
        }}
      >
        <p>
          {" "}
          Domicilio: {data?.address?.street + " N° " + data?.address?.number}
        </p>
        <p> Ciudad: {data?.address?.city?.name}</p>
        <p> Provincia: {data?.address?.city?.state?.name}</p>
        <p> Teléfono: {data?.phone_number}</p>
      </Box>
      <Images id={id} />
      {characteristicsData && (
        <Box
          sx={{
            display:'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            color: "#011A5B",
            backgroundColor: "#FFFFFF",
            textAlign: "left",
            padding: "40px 80px 40px 80px",
            mt: "20px", 
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>Características del Club:</Typography>
          <Grid container spacing={2}>
            {data?.characteristics?.map((characteristic) => (
              <Grid item xs={6} sm={4} md={3} key={characteristic.id}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <img
                    src={characteristic.url}
                    alt={characteristic.name}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <Typography>{characteristic.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Detail;
