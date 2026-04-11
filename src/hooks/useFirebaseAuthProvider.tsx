import { auth, db } from "@/config/firebase.config";
import { FirestoreUser, UserInterface } from "@/types/users";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFirebaseAuthProvider = () => {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    const formatedUser = (user: User, userDoc?: FirestoreUser):UserInterface => {
        return {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: userDoc?.displayName ?? user.displayName,
            photoURL: userDoc?.photoURL ?? user.photoURL,
            onboardingIsCompleted: userDoc?.onboardingIsCompleted ?? false,
            lastSigninAt: user.metadata.lastSignInTime 
                            ? Timestamp.fromDate(new Date(user.metadata.lastSignInTime)) 
                            : Timestamp.now(),
            createdAt: user.metadata.creationTime 
                            ? Timestamp.fromDate(new Date(user.metadata.creationTime)) 
                            : Timestamp.now(),
            userDocument: userDoc || undefined,
        }
    }

    const getUserDocument = (user: User) => {
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
            let userData : UserInterface;

            if(snapshot.exists()){
                const userDoc = snapshot.data() as FirestoreUser;
                userData = formatedUser(user, userDoc);
            }
            else userData = formatedUser(user);

            setAuthUser(userData);
            setAuthUserIsLoading(false);
        });

        return unsubscribe;
    }

    useEffect(() => {
        let unsubscribeSnapshot: (() => void) | null = null;

        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setAuthUserIsLoading(true);
            if (!user) {
                if(unsubscribeSnapshot) unsubscribeSnapshot();
                setAuthUser(null);
                setAuthUserIsLoading(false);
                return;
            }
            unsubscribeSnapshot = getUserDocument(user);

        })

        return () => {
            unsubscribeAuth()
            if(unsubscribeSnapshot) unsubscribeSnapshot();};
    }, [])

    return {
        authUser,
        authUserIsLoading,
    }
}