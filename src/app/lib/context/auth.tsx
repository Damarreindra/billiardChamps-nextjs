"use client"
import { getAuth } from 'firebase/auth';
import { useEffect } from "react";
import { app } from "../firebaseConfig";
import { initialUserState, useUser } from './user';

const AuthStateChangeprovider = () =>{
    const auth = getAuth(app)
    const user = useUser()
    const {setUser} = user
    const initiateAuthStateChange = () =>{
        auth.onAuthStateChanged((user)=>{
            if(user){
              console.log("logged in");
                console.log(user)  
                setUser({email:user.email, uid: user.uid})   
            }else{
                console.log("not login yeet!");
                setUser(initialUserState)  
            }

        })
    }

    useEffect(()=>{
        initiateAuthStateChange()
    },[])

    return <></>
}

export default AuthStateChangeprovider