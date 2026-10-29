
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-b3472.firebaseapp.com",
  projectId: "fir-b3472",
  storageBucket: "fir-b3472.firebasestorage.app",
  messagingSenderId: "117872570904",
  appId: "1:117872570904:web:53f0516d826221f743c96d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  

const provider = new GoogleAuthProvider()

export {auth , provider}