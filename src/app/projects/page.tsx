import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";

export const generateMetadata =  () => {
  return Seo({
    title: "Projets",
    description : "Description de toutes tes magnifiques réalisations en tant que développeur d'élite.",
  })
}

export default function Projects() {

  return (
    <BasicLayout>
      Projects
    </BasicLayout>
  );
}
