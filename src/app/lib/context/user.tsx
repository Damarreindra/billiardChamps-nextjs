'use client'
import { createContext, useContext, useState } from "react"

export const initialUserState = {
    email:null,
    uid:null
}

const userContext = createContext()

export const useUser = () =>{
    return useContext(userContext)
}

export const UserProvider = (props:any)=>{
    
const [userState, setUserState]=useState(initialUserState)
console.log({userState});

const setUser = (userCredential:any) =>{
    setUserState({...userCredential})
}
const resetUser = () =>{
    setUserState(initialUserState)
}

const value = {...userState, setUser, resetUser}
return <userContext.Provider value={value} {...props}/>
}