import { Container } from "@/ui/components/container/container"
import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import Link from "next/link"
import { InscriptionForm } from "./inscription.form"
import { FormsType } from "@/types/forms"

interface InscriptionViewProps {
  form : FormsType,
}

export const InscriptionView = ({form}: InscriptionViewProps) => {
    return (
      <Container className="grid grid-cols-2 gap-20">
        <div className="flex items-center">
          <div className="relative w-full flex items-center justify-center h-[531px] overflow-hidden">
            <div className="absolute z-0 h-[350px] w-[350px] bg-amber-300 rounded-full"></div>
            <div className="absolute z-0 h-[250px] w-[250px] bg-gray-200 rounded-full blur-lg"></div>
            <Image fill src="/assets/images/spongebob-t.png" alt="Image d'inscription" className="object-none"/>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Box padding_y="py-5">
            <div>
              <div className="flex items-center justify-between">
                <Typography variant="h5" balise="h1">
                  Inscription
                </Typography>
                <div className="flex items-center justify-end gap-2">
                  <Typography variant="caption4" balise="h2" theme="gray">
                    Tu as déjà un compte ?
                  </Typography>
                  <Typography variant="caption4" balise="h2" theme="primary">
                    <Link href="/connexion">Connexion</Link>
                  </Typography>
                </div>
              </div>
              <div>
                <InscriptionForm form = {form}/>
                <Typography variant="caption4" theme="gray" className="max-w-md mx-auto space-y-1 text-center">
                  <div>En t'inscrivant , tu acceptes les</div>
                  <div>
                    <Link href="/#" className="text-gray">Conditions d'utilisation</Link>
                    {" "} et la {" "}
                    <Link href="/#" className="text-gray">Politique de confidentialité</Link>
                  </div>
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    )
  }
  