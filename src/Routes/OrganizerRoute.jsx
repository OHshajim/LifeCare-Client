import useAuth from '../Hooks/useAuth';
import useOrganizer from '../Hooks/useOrganizer';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrganizerRoute = ({ children })=> {
    const { user, loading } = useAuth()
    const [isOrganizer, isOrganizerLoading] = useOrganizer()
    const location = useLocation()
    if (loading || isOrganizerLoading) {
        return <progress className="progress w-56"></progress>;
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