import { AuthContext } from "../auth/context"

export const logout = () => {

    const { setUserData, setIsLogged } = AuthContext();
    setUserData(null);
    setIsLogged(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

}
