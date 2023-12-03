/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CardProducts from '../products/CardProducts';
import { useLocation } from 'react-router-dom';
import { Container, Button, Typography, IconButton } from '@mui/material';
import useFetchApi from '../../hooks/useFetchApi';
import { ENDPOINTS } from '../../constants/endpoints';
import { METHODS } from '../../constants/methods';
import dayjs from 'dayjs';
import Loading from '../loading/Loading';
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import { useNavigate } from "react-router-dom";


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filters = {
    city: { id: +queryParams.get('city') },
    category: { id: +queryParams.get('sport') },
    datetime: `${dayjs(queryParams.get('date').$d).format('YYYY-MM-DDT')}${dayjs(
      queryParams.get('time')
    ).format('HH:mm:ss[Z]')}`,
  };

  const { data, isLoading, error } = useFetchApi(ENDPOINTS.CLUB_SEARCH, METHODS.POST, filters);

  return (
    <Container
        maxWidth="xl"
        sx={{
            padding: '10px',
            mb: '0px',
            backgroundColor: '#FFFFFF',
            mx: "auto",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}
        id="home"
        >
        <div style={{ padding: '20px' }}>
            <h1 style={{ margin: '20px 0', color: '#333' }}>RESULTADOS DE TU BÚSQUEDA</h1>
            {isLoading && <Loading />}
            {!isLoading && data.length > 0 ? (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                {data.map((club) => (
                <CardProducts
                    key={club.id}
                    name={club.name}
                    tel={club.phone_number}
                    city={
                    club.address.street +
                    ' N° ' +
                    club.address.number +
                    ', ' +
                    club.address.city.name
                    }
                    id={club.id}
                />
            ))}
                <Button variant="contained" onClick={() => window.location.href = '/'} sx={{ mt: 2 }}>
                    NUEVA BÚSQUEDA
                </Button>
            </div>
        ) : (
            <Container
                sx={{
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" sx={{ color: 'red', mt: 2 }}>
                    {isLoading
                    ? ''
                    : 'No se encontraron turnos disponibles para tu búsqueda, por favor inténtalo nuevamente.'}
                </Typography>
                <Button variant="contained" onClick={() => window.location.href = '/'} sx={{ mt: "10px" }}>
                    NUEVA BÚSQUEDA
                </Button>
            </Container>
        )}
        </div>
    </Container>
    );
};

export default SearchResults;
