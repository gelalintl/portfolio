"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
    user: User | null,
    loading : boolean;
}

interface AuthProviderProps {
    children : React.ReactNode,
}

const AuthContext = createContext<AuthContextProps>({
    user : null,
    loading: true,
})

export function AuthProvider ({children} : AuthProviderProps){

    const [user, setUser] = useState<AuthContextProps["user"]>(null);
    const [loading, setLoading] = useState<AuthContextProps["loading"]>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return ()=> unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}