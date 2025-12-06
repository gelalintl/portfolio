export interface Crumb{
    key: string,
    label: string,
    href: string,
}

export const crumbsList : Crumb[] = [
    {key: "", label : "Accueil", href: "/"},
    {key: "design", label: "Design System", href : "/design"},
    {key: "contact", label: "Contacts", href : "/contacts"},
    {key: "formations", label: "Formations", href : "/formations"},
    {key: "projects", label: "Projets", href : "/projects"},
    {key: "connexion", label: "Connexion", href : "/connexion"},
    {key: "inscription", label: "Inscription", href : "/connexion/inscription"},
    {key: "mot-de-passe-perdu", label: "Récupération du mot de passe", href : "/connexion/mot-de-passe-perdu"},
    {key: "dashboard", label: "Tableau de bord", href : "/user/dashboard"},
]