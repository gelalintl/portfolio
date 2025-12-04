import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import { ActiveLink } from "./activeLink"

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
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
                    <Button size="small" baseUrl="/connexion">Connexion</Button>
                    <Button size="small" variant="secondary" baseUrl="/connexion/inscription">Rejoindre</Button>
                </div>
            </div>
        </Container>
    </nav>
  )
}
