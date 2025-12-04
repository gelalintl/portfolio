import { Container } from "@/ui/components/container/container"
import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "./login.form"
import { FormsType } from "@/types/forms"

interface LoginViewProps {
  form : FormsType
}

export const LoginView = ({form} : LoginViewProps) => {
  return (
    <Container className="grid grid-cols-2 gap-20">
        <div className="flex items-center">
          <div className="relative w-full flex items-center justify-center h-[531px] overflow-hidden">
            <div className="absolute z-0 h-[350px] w-[350px] bg-[#F2786D] rounded-full"></div>
            <div className="absolute z-0 h-[250px] w-[250px] bg-gray-200 rounded-full blur-lg"></div>
            <div className=" relative w-[350px] h-[350px]">
            <Image fill src="/assets/images/patrickstar-t.png" alt="Image d'inscription" className="object-contain "/>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div>
              <div className="flex items-center justify-between">
                <Typography variant="h5" balise="h1">
                  Connexion
                </Typography>
                <div className="flex items-center justify-end gap-2">
                  <Typography variant="caption4" balise="h2" theme="gray">
                    Tu n'as pas de compte ?
                  </Typography>
                  <Typography variant="caption4" balise="h2" theme="primary">
                    <Link href="/connexion/inscription">S'inscrire</Link>
                  </Typography>
                </div>
              </div>
              <div>
                <LoginForm form={form}/>
              </div>
            </div>
          </Box>
        </div>
      </Container>
  )
}
