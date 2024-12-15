import { onAuthStateChanged, signOut } from "firebase/auth"
import React,{createContext, useContext, useEffect, useState} from "react"
import {auth} from '../firebase/Setup'


const LoginContext = createContext()

export const useLoginContext = () => useContext(LoginContext)

export const LoginProvider = ({children}) => {
    const [isLoginOpen,setIsLoginOpen] = useState(false)
    const[user,setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () => unsubscribe()
    },[])

    const toggleLoginForm = () => {
        setIsLoginOpen(!isLoginOpen)
    }

    const logout = async () => {
        await signOut(auth)
        alert("Logged out sucessfully")
    }

    return (
        <LoginContext.Provider value={{isLoginOpen, toggleLoginForm, user, logout}}>
            {children}
        </LoginContext.Provider>
    )
}
