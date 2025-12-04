import { AppLinks } from "@/types/appLinks";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
    {label: "Accueil",  link: "/", type: "internal",},
    {label: "Projets",  link: "/projects", type: "internal",},
    {label: "Coders Monkey",  link: "/#", type: "internal",},
    {label: "Formations",  link: "https://youtube.com/@remotemonkey", type: "external",},
]

export const footerUserLinks: AppLinks[] = [
    {label: "Mon espace",  link: "/#", type: "internal",},
    {label: "Connexion",  link: "/connexion", type: "internal",},
    {label: "Inscription",  link: "/connexion/inscription", type: "internal",},
    {label: "Mot de passe oublié",  link: "/connexion/mot-de-passe-perdu", type: "internal",},
]

export const footerInformationLinks: AppLinks[] = [
    {label: "CGU",  link: "/#", type: "internal",},
    {label: "Confidentialité",  link: "/#", type: "internal",},
    {label: "A propos",  link: "/#", type: "internal",},
    {label: "Contact",  link: "/#", type: "internal",},
]

export const footerSocialMediaLinks: AppLinks[] = [
    {
        label: "Youtube",  
        link: "https://youtube.com/@remotemonkey", 
        type: "external",
        icon : RiYoutubeFill
    },
    {
        label: "Linkedin",  
        link: "https://linkedin.com/in/arnaud-desportes-71999446", 
        type: "external",
        icon : RiLinkedinFill,
    },
    {
        label: "Slack",  
        link: "https://coders-monkeys.slack.com", 
        type: "external",
        icon: RiSlackFill
    },
]

export const footerLinksBlock = [
    {label: "App", content : footerApplicationLinks},
    {label: "Utilisateurs", content : footerUserLinks},
    {label: "Informations", content : footerInformationLinks},
    {label: "Réseaux Sociaux", content : footerSocialMediaLinks},
]