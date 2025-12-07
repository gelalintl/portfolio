import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";

export const generateMetadata =  () => {
  return Seo({
    title: "Tableau de bord",
    description : "Bienvenu(e) dans votre tableau de bord utilisateur.",
  })
}

export default function Dashboard() {
  return (
    <BasicLayout>
      Dashboard
    </BasicLayout>
  );
}