import { Container } from "@/ui/components/container/container"
import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import Image from "next/image"
import { LostPasswordForm } from "./lostPassword.form"
import { FormsType } from "@/types/forms"

interface LostPasswordViewProps {
  form : FormsType
}

export const LostPasswordView = ({form}: LostPasswordViewProps) => {
    return (
      <Container className="grid grid-cols-2 gap-20">
        <div className="flex items-center">
          <div className="relative w-full flex items-center justify-center h-[531px] overflow-hidden">
            <div className="absolute z-0 h-[350px] w-[350px] bg-red-500 rounded-full"></div>
            <div className="absolute z-0 h-[250px] w-[250px] bg-gray-200 rounded-full blur-lg"></div>
            <div className=" relative w-[350px] h-[350px]">
                <Image fill src="/assets/images/captaincrabs.png" alt="Image d'inscription" className="object-contain"/>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div>
              <div className="flex items-center justify-between">
                <Typography variant="h5" balise="h1">
                  Récupération de mot de passe
                </Typography>
                <div className="flex items-center justify-end gap-2">
                  <Typography variant="caption4" balise="h2" theme="primary">
                    <Link href="/connexion">Connexion</Link>
                  </Typography>
                </div>
              </div>
              <div>
                <LostPasswordForm form = {form}/>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    )
  }
  