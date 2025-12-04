import { LinkType } from "@/libs/linksType";
import { IconType } from "react-icons";

export interface AppLinks  {
    label: string,
    link: string,
    type : LinkType,
    icon?: IconType,
}

export interface FooterBlocks {
    label : string,
    content : AppLinks[],
}