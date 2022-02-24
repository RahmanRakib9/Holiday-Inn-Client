import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useNavigate, useLocation } from 'react-router-dom'



initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});

     const auth = getAuth();

     //for redirect sign in user
     let navigate = useNavigate();
     let location = useLocation();
     let from = location.state?.from?.pathname || "/";


     //sign in using google
     const signInWithGoogle = () => {
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then((res) => {
                    setUser(res.user)
                    navigate(from, { replace: true });
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