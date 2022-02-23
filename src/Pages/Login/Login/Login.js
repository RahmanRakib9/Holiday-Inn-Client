import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
     const { user, signInWithGoogle } = useFirebase();

     return (
          <div>
               <button onClick={signInWithGoogle}>Google Login</button>
          </div>
     );
};

export default Login;