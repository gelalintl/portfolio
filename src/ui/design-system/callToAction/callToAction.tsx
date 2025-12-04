import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/libs/linksType"
import Image from "next/image"

export const CallToAction = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
        <Container className="py-20">
            <div className="relative z-10 max-x-3xl space-y-5">
                <Typography variant="h2" theme="white" balise="h2">
                    Arrête de vivre dans la peur et lance toi
                </Typography>
                <div>
                <Button variant="success" baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                    Contacte-nous
                </Button>
                </div>
            </div>
            <div>
                <Image 
                    width={800} 
                    height={800} 
                    alt="Image du call to action" 
                    src="/assets/svg/next.svg"
                    className="absolute -bottom-5 right-0"
                    />
            </div>
        </Container>
    </div>
  )
}
