import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

    //create user email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign with email and password
    const siginInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sign in with google
    const singinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //Auth state ovserber
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe
    },[]);
    //sign out user
    const logOut = () => {
        return signOut(auth)
    }
    const userInfo = { createUser, siginInEmailPassword, singinWithGoogle, user, logOut };
    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;