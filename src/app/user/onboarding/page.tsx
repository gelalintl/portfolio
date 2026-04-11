import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";

export const generateMetadata =  () => {
  return Seo({
    title: "Onboarding",
    description : "Bienvenu(e) dans votre processus d'onboarding.",
  })
}

export default function Onboarding() {
  return (
    <BasicLayout>
      Onboarding Page
    </BasicLayout>
  );
}