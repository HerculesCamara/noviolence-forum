import {auth, googleProvider, facebookProvider, githubProvider} from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export function LoginPage() {
    const [value, setValue] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (provider) => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('name', data.user.displayName)
      localStorage.setItem('photo', data.user.photoURL)
      setIsLoggedIn(true);
    })
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.reload();
  };

    return (
        <>
            <h1>Faça o login</h1>
            <button /* className={styles.login} */ onClick={()=> handleLogin(googleProvider)}>Login</button>
        </>
    )
}