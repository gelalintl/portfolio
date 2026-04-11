"use client"

import { useAuth } from "@/context/AuthContext"
import { GUEST, ONBOARDING, PUBLIC, REGISTRED, SessionStatus } from "@/libs/sessionStatuses"
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

    const redirectToOnboarding = () => {
        const onboardingIsCompleted = authUser?.onboardingIsCompleted === true
        /**On renvoie true si 
         * - on n'est pas en chargement
         * - l'utilisateur est connecté
         * - l'onboarding n'est pas complété
         * - et l'utilisateur essaie d'accéder à une page qui n'est pas l'onboarding
         * ** dans le cas contraire, on retourne false pour empecher la redirection sur onboarding
         */
        if (sessionStatus !== ONBOARDING && !onboardingIsCompleted && authUser && !authUserIsLoading){
            return true
        }

        return false
    }
    
    useEffect(()=>{
        /**
         * Si on ne charge pas et un utilisateur connecté qui n'a pas complété son onboarding essaie d'accéder à une page
         * on le redirige vers l'onboarding 
        */
        if(redirectToOnboarding()){
            router.replace('/user/onboarding')
            return;
        }

        if(!authUserIsLoading){
            /**
             * On redirige un utilisateur non connecté vers la page de connexion si :
             * - il essaie d'accéder à une page "registred" ou "onboarding"
             */
            if(!authUser && (sessionStatus === REGISTRED || sessionStatus === ONBOARDING)) {
                router.replace('/connexion')
                return;
            }

            /**
             * On redirige l'utilisateur vers son dashboard si :
             * - il essaie de se connecter à une page "guest"
             * - ou il essaie d'accéder à une page "onboarding" alors que son onboarding est déjà complété
            */
            if(authUser && (sessionStatus === GUEST || (sessionStatus === ONBOARDING && authUser.onboardingIsCompleted))) 
            {
                router.replace('/user/dashboard')
                return;
            }

            setIsChecking(false)
        }
    }, [sessionStatus, authUser, authUserIsLoading, router])

    if(authUserIsLoading || isChecking){
        return <FullScreenSpinner />
    }

    if(!authUser && (sessionStatus === REGISTRED || sessionStatus === ONBOARDING)) return null
    if(authUser && (sessionStatus === GUEST || (sessionStatus === ONBOARDING && authUser.onboardingIsCompleted))) return null
    if(redirectToOnboarding()) return null

    return (
        <> {children} </>
    )
}