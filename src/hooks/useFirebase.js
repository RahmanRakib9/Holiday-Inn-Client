import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});

     const auth = getAuth();

     const signInWithGoogle = () => {
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then((res) => {
                    console.log(res.user);
               })
               .catch((error) => {
                    console.log(error);
               })

     }


     return {
          signInWithGoogle
     }

}

export default useFirebase;