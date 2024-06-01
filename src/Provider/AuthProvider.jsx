import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};
AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
export default AuthProvider;