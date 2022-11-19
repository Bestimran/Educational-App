import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const {user, setUser} = useState()
   
    const registerForm = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const authInfo = {user, registerForm};


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;