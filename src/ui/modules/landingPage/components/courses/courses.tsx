import { Container } from "@/ui/components/container/container"
import { Important } from "@/ui/design-system/effects/important"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiBearSmileLine, RiChatSmile2Line, RiPlayCircleFill, RiPlayCircleLine } from "react-icons/ri"

export const CoursesView = () => {
    return (
        <div className="bg-gray-50">
            <Container className="py-24 text-center">
                <Typography variant="h2" balise="h2" className="mb-2.5">
                    Attaque toi au visuel
                </Typography>
                <Typography variant="lead" balise="h3" className="mb-5">
                    Capturez l'atetntion de l'internaute est le but de tout Frontend dev
                </Typography>
                <Typography variant="caption3" theme="gray" balise="p" className="mb-16">
                    Une méthode qui a toujours, toujours et surtout <Important>TOUJOURS</Important> fait ses preuves
                    c'est l'utilisation d'éléments visuels captivants poour le visiteur de votre page web.
                </Typography>
                <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="flex items-center justify-center gap-5 relative h-full bg-gray text-secondary rounded opacity-0 hover:opacity-85 animate z-10">
                            <RiBearSmileLine size={120}/>
                            <Typography 
                                variant="h4" 
                                theme="secondary" 
                                className="uppercase"
                                weigth="medium">Effet Surprise</Typography>
                        </div>
                        <Image 
                            fill 
                            src="/assets/images/dandadan.jpg" 
                            alt="Une image de Dandadan en 4K" 
                            className="object-cover object-center rounded"/>
                    </div>
                </a>
            </Container>
        </div>
    )
}