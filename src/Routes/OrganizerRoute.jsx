import useAuth from '../Hooks/useAuth';
import useOrganizer from '../Hooks/useOrganizer';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Components/Loader/Loader';

const OrganizerRoute = ({ children })=> {
    const { user, loading } = useAuth()
    const [isOrganizer, isOrganizerLoading] = useOrganizer()
    const location = useLocation()
    if (loading || isOrganizerLoading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>;
    }
    if (user && isOrganizer) {
        return children ;
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};
OrganizerRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
export default OrganizerRoute;