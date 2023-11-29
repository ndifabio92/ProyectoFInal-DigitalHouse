import { Typography, Box, Grid } from "@mui/material"



const Characteristic = ({club}) => {

  

    return (
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
            padding: "40px 80px 40px 80px"
          }}
        >
          <Typography variant="p" sx={{ mb: 2 }}>Características del club:</Typography>
          <Grid container spacing={2}>
            {club?.characteristics?.map((characteristic) => (
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
    )
}
export default Characteristic