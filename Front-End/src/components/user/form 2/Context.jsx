import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(null);

  const storeData = (data) => {
    // Guardar 'data.token' en el localStorage
    localStorage.setItem("token", JSON.stringify(data.token));
    setStoredData(data);
  };

  const contextValue = {
    storedData,
    storeData,
    setStoredData
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
