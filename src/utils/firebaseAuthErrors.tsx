import { FirebaseCreateFormField } from "@/types/firebaseFormField";
import { FirebaseLoginFormField } from "@/types/firebaseFormField";

export interface FirebaseErrorsConfig<TField extends string>{
    field? : TField,
    message : string
}

export const FIREBASE_CREATE_ERRORS : Record<string, FirebaseErrorsConfig<FirebaseCreateFormField>> = {
    "auth/email-already-in-use": {
        field: "email",
        message: "Cet email est déjà utilisé",
    },
    "auth/weak-password": {
        field: "password",
        message: "Le mot de passe doit contenir au moins 6 caractères",
    },
}

export const FIREBASE_LOGIN_ERRORS : Record<string, FirebaseErrorsConfig<FirebaseLoginFormField>> = {
    "auth/user-not-found": {
        field: "email",
        message: "Aucun compte trouvé avec cet email",
    },
    "auth/wrong-password": {
        field: "password",
        message: "Mot de passe incorrect",
    },
}