import React, { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const FirebaseContext = createContext(null)
const firebaseConfig = {
  apiKey: "AIzaSyA2HC0F81Y4M1-ifGk7uW4IpKFuJr92XnI",
  authDomain: "my-app099.firebaseapp.com",
  projectId: "my-app099",
  storageBucket: "my-app099.appspot.com",
  messagingSenderId: "811291722638",
  appId: "1:811291722638:web:acfb5ae7d96a77869f1adf"
};
export const useFirebase = () => useContext(FirebaseContext)
const FirebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(FirebaseApp)
const googleProvider = new GoogleAuthProvider()


const firebaseProvider = (props) => {

  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }
  const signInUserWithGoogle = () => [
    signInWithPopup(auth, googleProvider)
  ]

  return (
    <FirebaseContext.Provider value={signInUserWithEmailAndPassword}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default firebaseProvider