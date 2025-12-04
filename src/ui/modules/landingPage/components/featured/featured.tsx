import { SocialNetworksButtons } from "@/components/navigation/socialNetworksButtons";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Important } from "@/ui/design-system/effects/important";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

interface featuredProps{
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
}

const featuredDatas : featuredProps[] = [
  {
    imgSrc: "/assets/svg/controller.svg",
    imgAlt: "Coffre aux trésors pour représenter la valeur de la connaissance semblable à un trésor.",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    imgSrc: "/assets/svg/sword.svg",
    imgAlt: "Une épée de chevalier pour montrer que l'entraînement est ardu",
    title: "Entraînements",
    description: "Entraine-toi à devenir meilleur et trouve de l'inspiration",
  },
  {
    imgSrc: "/assets/svg/mirror.svg",
    imgAlt: "Un miroir pour indiquer le reflet de tes compétences sur ta carrière de dev.",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités",
  },
  {
    imgSrc: "/assets/svg/handshake.svg",
    imgAlt: "Une poignée de mains montrant les relations tissées.",
    title: "Relations",
    description: "Connecte-toi avec des devs et propulse ta carrière!",
  },
]

export const FeaturedView = () => {

  const featuredList = featuredDatas.map(feature => (
    <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
      <div className="w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-100 relative overflow-hidden">
        <Image
          fill
          src = {feature.imgSrc}
          alt = {feature.imgAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src = {feature.imgSrc}
          alt = {feature.imgAlt}
          className="object-scale-down"
        />
      </div>
      <Typography variant="lead" balise="h3" weigth="medium" className="text-center mb-2.5">
        {feature.title}
      </Typography>
      <Typography variant="body-base" balise="p" theme='gray' className="text-center">
        {feature.description}
      </Typography>

    </div>
  ));

  return (
    <div className="bg-gray-50">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="col-span-7 grid grid-cols-2 gap-7">
          {featuredList}
        </div>
        <div className="col-span-5 flex flex-col justify-between gap-10">
          <div>
            <Typography variant="h2" balise="h2" className="mb-5">
              Les plus belles qualités d'un développeur.
            </Typography>
            <Typography variant="body-lg" theme="gray" balise="p" className="mb-8 text-justify">
              Sans doute <Important>la détermination</Important> est l'élément central face à tous les bugs et les heures de travail.
              La <Important>capacité d'apprentissage</Important> vient en second, car qu'est ce un développeur sans l'entraide et le partage ! Prendre et donner.
              Et ce sans quoi tout serait vain, la <Important children="passion"/>.
            </Typography>
            <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">Commencer</Button>
          </div>
          <div>
            <Typography variant="caption3" theme="gray" balise="div" className="mb-4">
              Nos réseaux sociaux
            </Typography>
            <SocialNetworksButtons/>
          </div>
        </div>
      </Container>
    </div>
  )
}
