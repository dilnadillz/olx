
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSpua5LPEd0YpZC2AVFkdToeNL2XS61jw",
  authDomain: "olx-new-5e4ac.firebaseapp.com",
  projectId: "olx-new-5e4ac",
  storageBucket: "olx-new-5e4ac.appspot.com",
  messagingSenderId: "79590760308",
  appId: "1:79590760308:web:12023a8c438c96d646d621"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
const db = getFirestore(app)

const signup = async(name,email,password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
    })
  }catch(error){
    console.log(error)
    alert(error)
  }
}

const login = async(email,password) => {
  try{
    await signInWithEmailAndPassword(auth,email,password)
  }catch(error){
    console.log(error)
    alert(error)
  }
}

const logout =() =>{
  signOut(auth)
}

export {db,login,signup,logout}