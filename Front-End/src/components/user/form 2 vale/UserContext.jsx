import { createContext, useContext, useState } from 'react';

// Crea el contexto
const UserContext = createContext();

// Crea un proveedor para el contexto
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataContext = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData: setUserDataContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};