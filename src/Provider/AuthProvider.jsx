import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../FIrebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const provider = new GoogleAuthProvider();

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

    // google user
    const googleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // Update User 
    const updateUser = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    }

    // watch user activities 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => { unsubscribe() };
    }, [])


    // logout 
    const Logout = () => {
        return signOut(auth);
    }

    const authInfo = {
        user, loading, CreateUser, Login, updateUser, Logout, auth, googleUser
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