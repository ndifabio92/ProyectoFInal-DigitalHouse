
export const logout = ({setUserData, setIsLogged}) => {
    setUserData(null);
    setIsLogged(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");
}
