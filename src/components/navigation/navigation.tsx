"use client"

import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import { ActiveLink } from "./activeLink"
import { useAuth } from "@/context/AuthContext"
import Link from "next/link"
import { Avatar } from "@/ui/design-system/avatar/avatar"

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {

    const {authUser} = useAuth()

    const {photoURL, displayName} = authUser || {}

    const authButtonsDisplay = ()=> (
        <>
            <Button size="small" baseUrl="/connexion">Connexion</Button>
            <Button size="small" variant="secondary" baseUrl="/connexion/inscription">Rejoindre</Button>
        </>
    )

    const userButtonsDisplay = ()=> {
        console.log("authUser", authUser)
        return(
            <>
            <Link href="/user/dashboard" className="flex items-center gap-2">
                <Avatar size="large" 
                        src={photoURL ?? undefined} 
                        alt={displayName ?? undefined} 
                />
                <div className="max-w-[160px]">
                    <Typography variant="caption2" weigth="medium" className="truncate">
                        {displayName ?? "Pseudo utilisateur"}
                    </Typography>
                    <Typography variant="caption4" weigth="medium" theme="gray">
                        Mon compte
                    </Typography>
                </div>
            </Link>
            {/* <Button size="small" variant="secondary" onClick={handleLogoutUser}>Déconnexion</Button> */}
        </>
        )
    }

  return (
    <nav className="border-b-2 border-gray-300 z-10 fixed top-0 left-0 w-full bg-gray-50">
        <Container className="flex items-center justify-between py-1.5 gap-5">
            {/* Logo, Nom et slogan */}
            <ActiveLink href="/">
                <div className="flex items-center justify-center gap-2.5">
                    <Logo size="small"/>
                    <div className="flex flex-col gap-1 items-start justify-start">
                        <span className="text-gray font-extrabold text-[24px]">
                            Gelal Intl
                        </span>
                        <Typography variant="caption4" theme="gray" balise="span">
                            Mon super slogan qui viendra bientôt
                        </Typography>
                    </div>
                </div>
            </ActiveLink>

            {/* Liens de navigation */}
            <div className="flex items-center gap-7">
                {/* Onglets */}
                <Typography variant="caption3" balise="div" className="flex items-center gap-7 cursor-pointer">
                    <ActiveLink href="/design">Design</ActiveLink>
                    <ActiveLink href="/projects">Projets</ActiveLink>
                    <ActiveLink href="/formations">Formations</ActiveLink>
                    <ActiveLink href="/contacts">Contacts</ActiveLink>
                </Typography>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                    {!authUser ? authButtonsDisplay() : userButtonsDisplay()}
                </div>
            </div>
        </Container>
    </nav>
  )
}
