import { db } from "@/config/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { FirestoreUser } from "@/types/users";

export const createFirestoreUser = async(user : Pick<FirestoreUser, "uid" | "email" |"howDidYouHearAboutUs">) => {
    try{
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            howDidYouHearAboutUs: user.howDidYouHearAboutUs,
            role: "user",
            onboardingStatus: "ongoing",
            createdAt: serverTimestamp(),
            lastSigninAt: serverTimestamp(),
        }, {merge: true})

        return {success : true}
    }
    catch(error){
        console.error("Error creating Firestore user: ", error);
        return {success : false}
    }
}