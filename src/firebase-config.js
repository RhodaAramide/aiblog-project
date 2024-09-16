// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_API_KEY2;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "aiblog-b617d.firebaseapp.com",
  projectId: "aiblog-b617d",
  storageBucket: "aiblog-b617d.appspot.com",
  messagingSenderId: "894232604673",
  appId: "1:894232604673:web:024e15f719e3e746109000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;