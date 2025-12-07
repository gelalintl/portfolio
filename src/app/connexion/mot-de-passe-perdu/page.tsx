import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";
import { LostPasswordContainer } from "@/ui/modules/authentification/lostPassword/lostPassword.container";

export const generateMetadata =  () => {
  return Seo({
    title: "Récupération du mot de passe",
    description : "Page de récupération du mot de passe.",
  })
}

export default function LostPassword() {

  return (
    <> 
      <BasicLayout> 
        <LostPasswordContainer/> 
      </BasicLayout>
    </>
  );
}
