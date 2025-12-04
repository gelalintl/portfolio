import { LinkTypes } from "@/libs/linksType";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

const SlackView = () => {
  return (
    <div>
        <Container className="flex items-center justify-between gap-2 pt-40 pb-40">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small"/>
                    <Typography variant="caption2" balise="span" weigth="medium">
                        Gelal Intl
                    </Typography>
                </div>
                <Typography variant="h2" balise="h2">
                    Fais confiance à notre super entreprise.
                </Typography>
                <Typography variant="body-lg" balise="p" theme="gray" className="max-w-lg">
                    Confie nous tes superbes projets, et laisse nous faire de tes rêves une réalité.
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>Contacte-nous !</Button>
            </div>
            <div className="relative w-[300px] h-[300px]">
                <Image
                    fill
                    src="/assets/svg/logo.svg"
                    alt="Logo de la société Gelal Intelligencies"
                    className="blur-3xl"
                />
                <Image
                    fill
                    src="/assets/svg/logo.svg"
                    alt="Logo de la société Gelal Intelligencies"
                />
            </div>
        </Container>
    </div>
  )
}

export default SlackView