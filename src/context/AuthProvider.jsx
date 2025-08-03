import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  

    const [userData,setUserData]=useState(null);

    useEffect(()=>{
        // Initialize localStorage with default data if not already set
        if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
            setLocalStorage();
        }
        const {employees}=getLocalStorage();
        console.log('AuthProvider - employees:', employees);
        setUserData(employees)
    },[])
    
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
            </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider