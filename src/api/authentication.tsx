{/**    Firebase importations      */}
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";

export const FirebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    return userCredentials.user;
  } 
  catch (error) {
    if (error instanceof FirebaseError) {
      throw error; 
    }
    throw new Error("Erreur inconnue");
  }
};

export const FirebaseLoginUser = async (email: string, password: string) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      return userCredentials.user;
    } 
    catch (error) {
      if (error instanceof FirebaseError) {
        throw error; 
      }
      throw new Error("Erreur inconnue");
    }
  };

export const FirebaseLogoutUser = async () =>{
    try{
        await signOut(auth)
        return true
    }
    catch (error) {
        if (error instanceof FirebaseError) {
            throw error
        }
        throw new Error("Erreur inconnue")
    }
}

export const FirebaseLostPassword = async (email:string) =>{
  try{
      await sendPasswordResetEmail(auth, email)
      return true
  }
  catch (error) { 
    if (error instanceof FirebaseError) {
      throw error
    }
    throw new Error("Erreur inconnue")
   }
}