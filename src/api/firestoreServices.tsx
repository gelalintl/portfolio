import { db } from "@/config/firebase.config";
import { doc, serverTimestamp, setDoc, getDoc, updateDoc, DocumentData } from "firebase/firestore";

export const saveDocument = async<T extends DocumentData>(collectionName: string, docId: string, data: T) => {
    try{
        const docRef = doc(db, collectionName, docId);
        await setDoc(docRef, {
            ...data,
            createdAt: serverTimestamp(),
        }, {merge: true})

        return {success : true}
    }
    catch(error){
        console.error("Error creating Firestore Document: ", error);
        return {success : false}
    }
}

export const getDocument = async(collectionName: string, docId: string) => {
    try{
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()){
            return {success: false, data: null};
        }

        return {success: true, data: docSnap.data()};
    }
    catch(error){
        console.error("Error fetching Firestore Document: ", error);
        return {success: false, data: null};
    }
}

export const updateDocument = async<T extends DocumentData>(collectionName: string, docId: string, data: T) => {
    try{
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, data);

        return {success : true}
    }
    catch(error){
        console.error("Error updating Firestore Document: ", error);
        return {success : false}
    }
}