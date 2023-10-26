import { useState, useEffect } from 'react';

const useFetchApi = (endpoint, id='') => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(`http://localhost:8080/${endpoint}/${id}`)
            try {
                setIsLoading(true)
                setError(null)
                const response = await fetch(`http://localhost:8080/${endpoint}/${id}`);
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
