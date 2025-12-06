import { FirebaseFormField } from "@/types/firebaseFormField";

export interface FirebaseErrorsConfig {
    field? : FirebaseFormField,
    message : string
}

export const FIREBASE_AUTH_ERRORS : Record<string, FirebaseErrorsConfig> = {
    "auth/email-already-in-use": {
        field: "email",
        message: "Cet email est déjà utilisé",
    },
    "auth/user-not-found": {
        field: "email",
        message: "Aucun compte trouvé avec cet email",
    },
    "auth/weak-password": {
        field: "password",
        message: "Le mot de passe doit contenir au moins 6 caractères",
    },
    "auth/wrong-password": {
        field: "password",
        message: "Mot de passe incorrect",
    },
}