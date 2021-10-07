import React, {createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseconfig'


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {

    const [currentUser,setCurrentUser]= useState({});

    useEffect(() =>{
        onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user.uid);
        })
    }, [])

    const signup = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email ,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        signOut(auth);   
    }
    const value ={signup, login, logout, currentUser};
    return(
     <AuthContext.Provider value ={value}> 
        {props.children}
     </AuthContext.Provider>
    )
    
}

