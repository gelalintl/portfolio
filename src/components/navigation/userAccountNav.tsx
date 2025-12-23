"use client"

import { FirebaseLogoutUser } from "@/api/authentication"
import { useAuth } from "@/context/AuthContext"
import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { ActiveLink } from "./activeLink"

export const UserAccountNavigation = () => {

    const {user, loading} = useAuth()
    const router = useRouter()

    const handleLogoutUser = () => {
        toast.promise(
            FirebaseLogoutUser(),
            {
                loading: "Déconnexion en cours...",
                success: "Vous avez été déconnecté.",
                error: "Une erreur est survenue lors de la déconnexion."
            }
        )
        .then(()=> router.push("/"))
    }

  return (
    <Box className="flex flex-col gap-7 mt-10">
        <div className="flex flex-col gap-3">
            <Typography variant="caption2" weigth="medium">
                <ActiveLink href="/user/dashboard">Mon tableau de bord</ActiveLink>
            </Typography>
            <Typography variant="caption2" weigth="medium">
                <ActiveLink href="/user/my-projects">Mes projets</ActiveLink>
            </Typography>
        </div>
        <div className="flex justify-center">
        {!loading && user && (
            <><Button size="small" variant="secondary" onClick={handleLogoutUser}>Déconnexion</Button> </>
         )}
        </div>
    </Box>
  )
}
