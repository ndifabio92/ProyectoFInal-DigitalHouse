import { Box } from "@mui/material"
import { ENDPOINTS } from "../../constants/endpoints";
import { METHODS } from "../../constants/methods";
import useFetchApi from "../../hooks/useFetchApi";
import Loading from "../loading/Loading";

const DataClub = ({idClub}) => {

    const { data: club, isLoading: isLoadingClub , error: errorClub } = useFetchApi(`${ENDPOINTS.CLUB}`, METHODS.GET, idClub)

    const { data: clubImages } = useFetchApi(`${ENDPOINTS.IMAGES}/${idClub}`);

    const imagesURL = clubImages?.map((image) => ({
        id: `${image.id}`,
        url: `${import.meta.env.VITE_BACKEND_API}image/${idClub}/download/${image.id}`,
    }));

  const imagenPrinc = imagesURL ? imagesURL[0] : [];


    return(
        <> 
            {
            (isLoadingClub)?<Loading/>:
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
                    <h2> {club?.name} </h2>
                    <p> {club?.phone_number} </p>
                    <p> {club?.address?.street} N° {club?.address?.number} </p>
                    <p> {club?.address?.city?.name} </p>
                                
                </Box>
            </Box>
            }
        </>
                    
    )
}

export default DataClub