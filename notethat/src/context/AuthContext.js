import React, {createContext} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = (props) => {
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
    const value ={signup, login, logout};
    return(
     <AuthContext.Provider value ={value}> 
        {props.children}
     </AuthContext.Provider>
    )
    
}

