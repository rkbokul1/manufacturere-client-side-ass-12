import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.ini";

const RequireAuth = ({ children }) => {
    
    let location = useLocation();

    if (!auth.user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;