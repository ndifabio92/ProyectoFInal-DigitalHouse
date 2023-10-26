import { useState, useEffect } from 'react';

const useFetchApi = (endpoint, id = '') => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const isId = id === "" ? "" : `/${id}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(`${import.meta.env.VITE_BACKEND_API}${endpoint}${isId}`);
                const jsonData = await response.json();

                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                setError('Error al obtener los datos JSON:', error);
                setIsLoading(false);
            }
        };

        fetchData();

    }, []);

    return { data, isLoading, error };
};

export default useFetchApi;
