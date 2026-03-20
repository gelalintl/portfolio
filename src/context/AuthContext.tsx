"use client";

import { createContext, useContext } from "react";
import { UserInterface } from "@/types/users";
import { useFirebaseAuthProvider } from "@/hooks/useFirebaseAuthProvider";

interface AuthContextProps {
    authUser: UserInterface | null,
    authUserIsLoading : boolean;
}

interface AuthProviderProps {
    children : React.ReactNode,
}

const AuthContext = createContext<AuthContextProps>({
    authUser : null,
    authUserIsLoading: true,
})

export function AuthProvider ({children} : AuthProviderProps){

    const auth = useFirebaseAuthProvider();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}