// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider} from 'firebase/auth'
/* import firebase from 'firebase' */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC0UCLdY2iD1J0ebHNpoMNCEFl8X-yE0kw",
  authDomain: "noviolence-forum.firebaseapp.com",
  projectId: "noviolence-forum",
  storageBucket: "noviolence-forum.appspot.com",
  messagingSenderId: "788304518106",
  appId: "1:788304518106:web:ba3465e9c868981be43ee3",
  measurementId: "G-814SH52T48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();