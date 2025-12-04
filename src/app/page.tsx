import Seo from "@/libs/seo";
import { Layout } from "@/ui/components/layouts/layout";
import { LandingPageContainer } from "@/ui/modules/landingPage/components/container";

export const generateMetadata =  () => {
  return Seo({
    title: "Accueil",
    description : "Bienvenu(e)s à la page d'accueil de mon premier site développé avec Next.js",
  })
}

export default function Home() {

  return (
    <>
      <Layout>
        <LandingPageContainer/>
      </Layout>
    </>
  );
}
