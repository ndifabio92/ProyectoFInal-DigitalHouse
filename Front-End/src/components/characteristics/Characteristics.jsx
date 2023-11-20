import { Typography, Box } from "@mui/material"



const Characteristic = ({club}) => {

  

    return (
        <Box
          sx={{
            color: "#011A5B",
            backgroundColor: "#FFFFFF",
            textAlign: "left",
            padding: "40px 80px 40px 80px"
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>Características:</Typography>
          <Box sx={{
            display:'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent:'space-around',
            color: "#011A5B",
            backgroundColor: "#FFFFFF",
            textAlign: "left",
          }} >
            {club?.characteristics?.map((characteristic) => (
                <Box 
                  key={characteristic.id} 
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <img
                    src={characteristic.url}
                    alt={characteristic.name}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <Typography>{characteristic.name}</Typography>
                </Box>
            ))}
          </Box>
        </Box>
    )
}
export default Characteristic