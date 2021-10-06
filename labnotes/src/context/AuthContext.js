import React, {createContext, useState, useEffect, useContext} from "react";
import {auth} from '../firebase';
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged,  GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth=()=>useContext(AuthContext);
export const AuthProvider = (props)=>{

    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{

        onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            console.log('soy user', user)
            const uid = user.uid;
            console.log('soy UID', uid)
        })
    },[])

    const register= (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=> signOut(auth);

    const loginGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const value = {register, login, logout, loginGoogle, currentUser};
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


