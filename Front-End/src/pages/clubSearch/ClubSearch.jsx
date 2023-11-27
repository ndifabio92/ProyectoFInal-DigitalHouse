/* eslint-disable react-hooks/exhaustive-deps */
import SearchBar from '../../components/ui/search/SearchBar';
import CardProducts from '../../components/products/CardProducts';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container } from '@mui/material';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';
import { METHODS } from '../../constants/methods';
import dayjs from 'dayjs';

const ClubSearch = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filters = {
        city: { id: +queryParams.get('city') },
        sport: { id: +queryParams.get('sport') },
        dateTime: `${dayjs(queryParams.get('date').$d).format('YYYY-MM-DDT')}${dayjs(queryParams.get('time')).format('HH:mm:ssZ[Z]')}`
    };


    // const dateTime = `${dayjs(filters.date.$d).format('YYYY-MM-DDT')}${dayjs(filters.time).format('HH:mm:ssZ[Z]')}`
    const { data, isLoading, error } = useFetchApi(ENDPOINTS.CLUB_SEARCH, METHODS.POST, filters);
    console.log(data)
    // console.log(filters)
    console.log(filters)

    const [clubs, setClubs] = useState([]);
    const [noClubsFound, setNoClubsFound] = useState(false);

    // useEffect(() => {
    //     const fetchFilteredClubs = async () => {
    //         try {
    //             const response = await axios.post('/club/search', filters);
    //             setClubs(response.data);
    //             setNoClubsFound(response.data.length === 0);
    //         } catch (error) {
    //             console.error('Error al obtener clubes filtrados:', error);
    //         }
    //     };

    //     fetchFilteredClubs();
    // }, [filters]);

    return (
        <Container
            maxWidth="xl"
            sx={{
                padding: '0',
                mt: '120px',
                mb: '40px',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
            }}
            id='home'
        >
            <div style={{ padding: '20px', textAlign: 'center' }}>
                {/* <SearchBar /> */}
                <h1 style={{ margin: '20px 0', color: '#333' }}>Club Search Results</h1>
                {noClubsFound ? (
                    <p style={{ color: '#FF4500', fontSize: '18px' }}>
                        No se han encontrado clubes que coincidan con lo que buscas.
                    </p>
                ) : (
                    <div>
                        {clubs.map((club) => (
                            <CardProducts
                                key={club.id}
                                name={club.name}
                                tel={club.phone_number}
                                city={
                                    club.address.street +
                                    " N° " +
                                    club.address.number +
                                    ", " +
                                    club.address.city.name
                                }
                                id={club.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default ClubSearch;
