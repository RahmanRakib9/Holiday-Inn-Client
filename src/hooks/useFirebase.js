import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});

     const auth = getAuth();

     //sign in using google
     const signInWithGoogle = () => {
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then((res) => {
                    setUser(res.user)
               })
               .catch((error) => {
                    console.log(error);
               })
     }

     //sign out using google
     const signOutGoogle = () => {
          signOut(auth)
               .then(() => {
                    setUser({})
               })
               .catch((error) => {
                    setUser(error)
               })
     }

     //an observer for user state change
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
          })
     }, [])


     return {
          user,
          signInWithGoogle,
          signOutGoogle
     }

}

export default useFirebase;