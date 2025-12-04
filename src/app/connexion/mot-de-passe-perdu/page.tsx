import Seo from "@/libs/seo";
import { Layout } from "@/ui/components/layouts/layout";
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
      <Layout>
        <LostPasswordContainer/>
      </Layout>
    </>
  );
}
