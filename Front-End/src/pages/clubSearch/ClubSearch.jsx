/* eslint-disable react-hooks/exhaustive-deps */
import CardProducts from '../../components/products/CardProducts';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';
import { METHODS } from '../../constants/methods';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

const ClubSearch = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const filters = {
        city: { id: +queryParams.get('city') },
        category: { id: +queryParams.get('sport') },
        datetime: `${dayjs(queryParams.get('date').$d).format('YYYY-MM-DDT')}${dayjs(queryParams.get('time')).format('HH:mm:ss[Z]')}`
    };

    const { data, isLoading, error } = useFetchApi(ENDPOINTS.CLUB_SEARCH, METHODS.POST, filters);

    if (data?.lenght > 0) {
        Swal.fire('', '', 'warning')
    }

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
                <h1 style={{ margin: '20px 0', color: '#333' }}>Resultado de Busqueda</h1>
                {!isLoading &&

                    data.map((club) => (
                        <CardProducts
                            key={club.id}
                            name={club.name}
                            tel={club.phone_number}
                            city={`${club.address.street } N° ${club.address.number },  ${club.address.city.name}`}
                                
                            id={club.id}
                        />
                    ))
                }

            </div>
        </Container >
    );
};

export default ClubSearch;
