import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const AuthContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
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

    const saveFavorites = (idFavoritos) => {
        const newFavorites = [...favorites, idFavoritos]
        setFavorites(newFavorites);
    }

    const updateFavorites = (clubId) => {
        if(!favorites.some(club => club.id === clubId)){
            const newFavorites = [...favorites, clubId];
            setFavorites(newFavorites);
        } else {
            setFavorites(favorites.filter(club => club.id != clubId))
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
        updateFavorites
    };


    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    );
};
