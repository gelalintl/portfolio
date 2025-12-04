import Seo from "@/libs/seo";
import { Layout } from "@/ui/components/layouts/layout";
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
      <Layout>
        <InscriptionContainer/>
      </Layout>
    </>
  );
}
