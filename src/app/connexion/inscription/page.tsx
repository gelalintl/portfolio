import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";
import { InscriptionContainer } from "@/ui/modules/authentification/inscription/inscription.container";

export const generateMetadata =  () => {
  return Seo({
    title: "Inscription",
    description : "Exemple pour la page d'inscription",
  })
}

export default function Inscription() {

  return (
    <> 
      <BasicLayout> 
        <InscriptionContainer/> 
      </BasicLayout>
    </>
  );
}
