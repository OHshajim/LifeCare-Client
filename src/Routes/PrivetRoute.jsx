import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} />
};

PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
export default PrivetRoute;