export const FIRESTORE_UPDATE_ERRORS : Record<string, { message: string, field?: string }> = {
    "permission-denied": {
        message : "Vous n'avez pas l'accès à ces informations.",
        field: "root"
    },
    "not-found": {
        message: "Le document que vous essayez de modifier n'existe pas.",
        field: "root"
    },
    "unavailable": {
        message: "Le serveur n'est pas accessible actuellement. Veuillez réessayer plus tard.",
        field: "root"
    }
}