import { createContext, useContext, useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { ENDPOINTS}  from "../constants/endpoints";


const DataContext = createContext();

export const AuthContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //console.log(userData)
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setIsLogged(true);
        }
    }, []);
    
    const saveData = (data) => {
        localStorage.setItem("user", JSON.stringify(data.usuario));
        localStorage.setItem("token", JSON.stringify(data.token));
        setUserData(data.usuario);
        setIsLogged(true);
    };

    const saveFavorites = (userId) => {
        const { data, isLoading } = useFetchApi(`${ENDPOINTS.USER}/${userId}/${ENDPOINTS.FAVORITES}`);
        setFavorites(JSON.stringify(data));
        setIsLoading(isLoading);
    }

    const updateFavorites = (club) => {
        if(!favorites.some(fav => fav.id === club.id)){
            setFavorites(favorites.push(club))
        } else {
            setFavorites(favorites.filter(fav => fav.id != club.id))
        }
    }

    const contextValue = {
        userData,
        saveData,
        setUserData,
        isLogged,
        setIsLogged, 
        favorites,
        saveFavorites, 
        updateFavorites,
        isLoading
    };


    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    );
};
