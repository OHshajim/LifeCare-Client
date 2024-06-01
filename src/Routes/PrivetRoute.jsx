import { Progress } from "@material-tailwind/react";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Progress value={50} variant="gradient" />
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