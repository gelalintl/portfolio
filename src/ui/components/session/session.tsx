"use client"

import { useAuth } from "@/context/AuthContext"
import { GUEST, PUBLIC, REGISTRED, SessionStatus } from "@/libs/sessionStatuses"
import { FullScreenSpinner } from "@/ui/design-system/spinner/fullScreenSpinner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface SessionAuthProps {
    children : React.ReactNode,
    sessionStatus?: SessionStatus
}

export const SessionAuth = ({children, sessionStatus = PUBLIC}: SessionAuthProps) => {
    const {authUser, authUserIsLoading} = useAuth()
    const [isChecking, setIsChecking] = useState(true)
    const router = useRouter();
    
    useEffect(()=>{

        if(!authUserIsLoading){
            if(sessionStatus === REGISTRED && !authUser) {
                router.replace('/connexion')
                return;
            }
                
            if(sessionStatus === GUEST && authUser) {
                router.replace('/user/dashboard')
                return;
            }

            setIsChecking(false)
        }
    }, [sessionStatus, authUser, authUserIsLoading, router])

    if(authUserIsLoading || isChecking){
        return <FullScreenSpinner />
    }

    if(sessionStatus === REGISTRED && !authUser) return null
    if(sessionStatus === GUEST && authUser) return null

    return (
        <> {children} </>
    )
}