import { Container } from '@/ui/components/container/container'
import Image from 'next/image'
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { DoubleLayouts } from '@/ui/design-system/effects/doubleLayouts';

export const HeroTopView = () => {
  return (
    <Container className='relative pt-40 pb-52 overflow-hidden'>
        <div className="w-full max-w-2xl space-y-5">
            <Typography variant="h1" balise="h1" className="max-w-lg">
                Bienvenus sur le <DoubleLayouts children="premier"/> site d'un Dev Junior!!
            </Typography>
            <Typography variant="body-lg" balise="p" theme="gray" className="max-w-2xl">
                Ici je pratique toutes les notions de Next.js 16, qui seront sans doute 
                indipensables pour ton projet. Alors promène toi dans l'interface,prends ton temps
                et surtout n'hsite pas à me contacter si tu veux travailler avec moi.
            </Typography>
            <div className='space-x-5 pt-2.5'>
                <Button baseUrl=''>Commencer</Button>
                <Button baseUrl="" variant='secondary'> En savoir plus {" "}</Button>
            </div>
        </div>
        <Image 
            src="/assets/svg/next.svg" 
            alt="Logo de Next.js pour marquer la technologie employée."
            width={811}
            height={596}
            className="absolute top-[30%] right-0 -z-10 opacity-50"
        />
    </Container>
  )
}
