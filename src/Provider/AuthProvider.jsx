import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../FIrebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create user 
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login User
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Update User 
    const updateUser = () => {
        setLoading(true);
        return;
    }
    // watch user activities 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe();
    }, [])


    // logout 
    const Logout = () => {
        return signOut(auth);
    }

    const authInfo = {
        user, loading, CreateUser, Login, updateUser, Logout, auth
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