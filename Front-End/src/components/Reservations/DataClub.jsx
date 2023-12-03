import { Box } from "@mui/material"
import { ENDPOINTS } from "../../constants/endpoints";
import useFetchApi from "../../hooks/useFetchApi";

const DataClub = ({club}) => {
    
    const { data: clubImages } = useFetchApi(`${ENDPOINTS.IMAGES}/${club.id}`);

    const imagesURL = clubImages?.map((image) => ({
        id: `${image.id}`,
        url: `${import.meta.env.VITE_BACKEND_API}image/${club.id}/download/${image.id}`,
    }));

  const imagenPrinc = imagesURL ? imagesURL[0] : [];


    return(

        <Box 
            sx={{
                width:250
            }}>
            <Box >
                <img 
                    src={imagenPrinc.url}
                    width={'100%'}
                />
            </Box> 
                   
            <Box sx={{textAlign:'center'}}>
                <h2> {club.name} </h2>
                <p> {club.phone_number} </p>
                <p> {club.address?.street} N° {club.address?.number} </p>
                <p> {club.address?.city?.name} </p>
                                
            </Box>
        </Box>

                    
    )
}

export default DataClub