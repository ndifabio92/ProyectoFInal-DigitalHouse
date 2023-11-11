import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(null);
  const [isLogged, setIsLogged] = useState(false)

  const storeData = (data) => {
    localStorage.setItem("token", JSON.stringify(data.token));
    setStoredData(data);
    setIsLogged(true);
  };

  const contextValue = {
    storedData,
    storeData,
    setStoredData, 
    isLogged,
    setIsLogged
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
