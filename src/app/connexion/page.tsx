import Seo from "@/libs/seo";
import { Layout } from "@/ui/components/layouts/layout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export const generateMetadata =  () => {
  return Seo({
    title: "Connexion",
    description : "Exemple de page de connexion",
  })
}

export default function Connexion() {

  return (
    <>
      <Layout>
        <LoginContainer/>
      </Layout>
    </>
  );
}
