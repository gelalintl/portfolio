"use client";

import { useAuth } from "@/context/AuthContext"
import { Spinner } from "@/ui/design-system/spinner/spinner"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
    children : React.ReactNode
}

export const AuthGuard = ({children}:AuthGuardProps) =>{
    const {user, loading} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!loading && !user) router.replace("/connexion")
    }, [user, loading, router])

    if(loading){
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <Spinner size="large" variant="primary"/>
            </div>
        )
    }

    if (!user) {
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}