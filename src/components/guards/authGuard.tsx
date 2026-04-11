"use client";

import { useAuth } from "@/context/AuthContext"
import { Spinner } from "@/ui/design-system/spinner/spinner"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
    children : React.ReactNode
}

export const AuthGuard = ({children}:AuthGuardProps) =>{
    const {authUser, authUserIsLoading} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!authUserIsLoading && !authUser) router.replace("/connexion")
    }, [authUser, authUserIsLoading, router])

    if(authUserIsLoading){
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <Spinner size="large" variant="primary"/>
            </div>
        )
    }

    if (!authUser) {  return null; }

    return (
        <>
            {children}
        </>
    )
}