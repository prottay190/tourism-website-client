import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Firebase/firebase.init';

initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

     // google sing in
     const singInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
       .then(result =>{
           setUser(result.user)
        //    console.log(result.user)
       })
       .finally(() =>setIsLoading(false));
       
     }

         //users stateChange
         useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
           
        })
    },[])

      //google sing out
      const logOut = () =>{
        signOut(auth)
        .then(() => {})
      }

    return{
        user,
        setUser,
        singInUsingGoogle,
        logOut,
        isLoading
        
    }
};

export default useFirebase;