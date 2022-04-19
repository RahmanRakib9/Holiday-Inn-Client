import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useNavigate, useLocation } from 'react-router-dom'



initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [authError, setAuthError] = useState('');
     const [isLoading, setIsLoading] = useState(true);

     const auth = getAuth();



     //create user with email and password
     const registerUser = (name, email, password) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((res) => {
                    setAuthError('')
                    const user = { email, displayName: name }
                    setUser(user);
               })
               .catch((error) => {
                    setAuthError(error.message);
               })
               .finally(() => isLoading(false))

     }



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
               .catch((error) => {
                    console.log(error);
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
               .catch((error) => {
                    console.log(error);
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
     }, [auth])


     return {
          user,
          isLoading,
          signInWithGoogle,
          signOutGoogle,
          registerUser,
          authError
     }

}

export default useFirebase;