import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { footerLinksBlock } from "./appLink";
import { FooterLinks } from "@/ui/components/footer/footerLinks";
import { v4 as uuidv4 } from 'uuid';
import { SocialNetworksButtons } from "./socialNetworksButtons";

export const Footer = () => {

    const footerBlock = footerLinksBlock.map(column => (
        <FooterLinks key={uuidv4() } content={column.content} label={column.label}/>
    ))

    return (
        <footer className="bg-gray pt-8">
            <Container className="flex flex-col justify-between">
                <div className="flex justify-between gap-7">
                    <div className="flex flex-col items-center gap-1">
                        <Typography variant="caption1" theme="white" weigth="medium">
                            Formations gratuites
                        </Typography>
                        <Typography variant="caption3" theme="gray">
                            Abonne-toi à la chaîne
                        </Typography>
                        <a href="#/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/assets/svg/logo.svg"
                                alt="Logo"
                                width={229}
                                height={216}
                            />
                        </a>
                    </div>
                    <div className="flex items-start justify-end">
                        {footerBlock}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <hr className="text-gray-800 mt-5"/>
                    <div className="flex justify-between items-center p-5">
                        <Typography variant="caption4" theme="gray">
                            Copyrights © 2025 Gelal Intl. Tous droits réservés. 
                        </Typography>
                        <div>
                            <SocialNetworksButtons theme="gray"/>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}