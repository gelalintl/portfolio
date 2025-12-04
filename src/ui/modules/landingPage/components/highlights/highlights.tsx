import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighlightsView = () => {
  return (
    <Container className="py-24 space-y-20">
        <div className="flex items-center justify-center gap-24">
            <div className="w-[420px] h-[250px] relative mt-10">
                <Image
                    fill
                    src="/assets/svg/globe.svg"
                    alt="Globe"
                />
            </div>
            <div className="space-y-7 max-w-md">
                    <Typography variant="h3" balise="h2">
                        Laisse tes idées faire le tour du monde !
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Montre ta créativité !</ListPoint>
                        <ListPoint>Surpasse les attentes.</ListPoint>
                        <ListPoint>Partage ta passion</ListPoint>
                    </div>
                    <div className="relative">
                        <Button baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="right">Vas-y </Button>
                    </div>
                </div>
        </div>
        <div className="flex flex-row-reverse justify-center items-center gap-24">
            <div className="w-[420px] h-[250px] relative mt-10">
                <Image
                    fill
                    src="/assets/svg/window.svg"
                    alt="Globe"
                />
            </div>
            <div className="space-y-7 max-w-md">
                    <Typography variant="h3" balise="h2">
                        Constitue toi un portfolio intéressant
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Confronte tes connaissances</ListPoint>
                        <ListPoint>Expose tes supers projets</ListPoint>
                        <ListPoint>Ouvre ton univers au monde</ListPoint>
                    </div>
                    <div className="relative">
                        <Button variant="secondary" baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="right">Vas-y </Button>
                    </div>
                </div>
        </div>
    </Container>
  )
}

interface ListPointsProps{
    children: React.ReactNode
}

const ListPoint = ({children}: ListPointsProps) =>{
    return (
        <div className="flex items-start gap-2">
            <RiCheckboxCircleLine size={24} className="mt-1 text-secondary mr-1"/>
            <Typography variant="body-lg" balise="span">
                {children}
            </Typography>
        </div>
    )
}
