import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export const generateMetadata =  () => {
  return Seo({
    title: "Connexion",
    description : "Exemple de page de connexion",
  })
}

export default function Connexion() {

  return (
    <BasicLayout> 
      <LoginContainer/> 
    </BasicLayout>
  );
}
