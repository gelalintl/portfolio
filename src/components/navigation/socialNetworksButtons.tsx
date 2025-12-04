"use client";

import { Button } from "@/ui/design-system/button/button"
import { footerSocialMediaLinks } from "./appLink"
import { v4 as uuidv4 } from 'uuid';
import { RiFacebookBoxFill } from "react-icons/ri";

interface SocialNetworksButtonsProps {
    theme? : "gray" | "accent" | "secondary",
    className? : string,
    col? : boolean,
}

export const SocialNetworksButtons = ({className, col, theme="accent"}: SocialNetworksButtonsProps)=> {

    const iconsList = footerSocialMediaLinks.map( socialnetwork => (
        <Button key={uuidv4()} 
                variant="icon" 
                iconTheme={theme}
                icon={{icon: socialnetwork.icon ? socialnetwork.icon : RiFacebookBoxFill}}
                baseUrl={socialnetwork.link}
                linkType={socialnetwork.type}
        />

    ))
    return (
        <div className={`flex items-center gap-2.5 ${className || ""} ${col && "flex-col"}`}>
            {iconsList}
        </div>
    )
}