{/**    Firebase importations      */}
import { createUserWithEmailAndPassword } from "firebase/auth";
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