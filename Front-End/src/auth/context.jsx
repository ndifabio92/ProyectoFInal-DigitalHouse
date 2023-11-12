import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const AuthContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLogged, setIsLogged] = useState(false)

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

    const contextValue = {
        userData,
        saveData,
        setUserData,
        isLogged,
        setIsLogged
    };

    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    );
};
