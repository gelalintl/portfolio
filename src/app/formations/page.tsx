import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";


export const generateMetadata =  () => {
  return Seo({
    title: "Formations",
    description : "Toutes les impressionnates formations que j'ai suivies pour m'indroduire dans le merveilleux univers de la programmation",
  })
}

export default function Formations() {

  return (
    <BasicLayout>
      Formations
    </BasicLayout>
  );
}
