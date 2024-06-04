import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'
import {auth, googleProvider, facebookProvider, githubProvider} from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
/* import { facebookProvider, githubProvider, googleProvider } from '../../config/authMethod'
import socialMediaAuth from '../../service/auth'; */

export function Header() {
  const [value, setValue] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (provider) => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
      localStorage.setItem('name', data.user.displayName)
      localStorage.setItem('photo', data.user.photoURL)
      localStorage.setItem('logged', true)
      setIsLoggedIn(true);
    })
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.reload();
  };
  
  
  return (
    <header className={styles.header}>
      <div className={styles.midContent}>
        {/* <img src={igniteLogo} alt="Logotipo do Ignite" /> */}
        <strong>NoViolence Forum</strong>
      </div>

      {/* <button onClick={()=> handleLogin(facebookProvider)}>Login Facebook</button>
      <button onClick={()=> handleLogin(githubProvider)}>Login GitHub</button> */}
      {isLoggedIn ? (
        <button className={styles.logout} onClick={()=> handleLogout()}>Sair</button>
      ) : (
        /* <div className={LoginPopup}> */
          <button className={styles.login} onClick={()=> handleLogin(googleProvider)}>Login</button>
        /* </div> */
      )}
      </header>
  )
}

/* const handleLogin = async (provider) => {
  const res = await socialMediaAuth(provider);
  console.log(res);
}; */