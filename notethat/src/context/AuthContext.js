import React, {createContext, useState, useEffect, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {

    const [currentUser,setCurrentUser]= useState({});

    useEffect(() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user.uid);
        })
    }, [])

    const signup = (email, password) =>{
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email ,password)=>{
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        const auth = getAuth();
        signOut(auth);   
    }
    const value ={signup, login, logout, currentUser};
    return(
     <AuthContext.Provider value ={value}> 
        {props.children}
     </AuthContext.Provider>
    )
    
}

