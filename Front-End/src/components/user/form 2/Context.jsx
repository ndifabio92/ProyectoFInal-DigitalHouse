import  { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(null);

  const storeData = (data) => {
    // Guardar 'data' en el localStorage
    localStorage.setItem('storedData', JSON.stringify(data));
    setStoredData(data);
  };

  const contextValue = {
    storedData,
    storeData,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};