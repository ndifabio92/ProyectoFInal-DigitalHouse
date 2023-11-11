import { useNavigate } from "react-router-dom";

export const RequireAuth = ({isLogged, children}) => {

    const navigate = useNavigate();

    if (!isLogged) {
    return navigate("/signin")
    }  
    return children
};
