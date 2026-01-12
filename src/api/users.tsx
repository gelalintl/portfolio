import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { FirestoreUser } from "@/types/users";

export const createFirestoreUser = async(user : Pick<FirestoreUser, "uid" | "email" |"howDidYouHearAboutUs">) => {
    try{
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            role: "user",
            createdAt: serverTimestamp(),
        })
    }
    catch(error){
        console.error("Error creating Firestore user: ", error);
    }
}