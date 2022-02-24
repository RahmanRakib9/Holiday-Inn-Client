import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useNavigate, useLocation } from 'react-router-dom'



initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);

     const auth = getAuth();

     //for redirect sign in user
     let navigate = useNavigate();
     let location = useLocation();
     let from = location.state?.from?.pathname || "/";


     //sign in using google
     const signInWithGoogle = () => {
          setIsLoading(true)
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then((res) => {
                    setUser(res.user)
                    navigate(from, { replace: true });
               })

               .finally(() => setIsLoading(false))
     }

     //sign out using google
     const signOutGoogle = () => {
          setIsLoading(true);
          signOut(auth)
               .then(() => {
                    setUser({})
               })
              
               .finally(() => setIsLoading(false))
     }

     //an observer for user state change
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
               setIsLoading(false);
          });
          return () => unsubscribed;
     }, [])


     return {
          user,
          isLoading,
          signInWithGoogle,
          signOutGoogle
     }

}

export default useFirebase;