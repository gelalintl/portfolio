import Seo from "@/libs/seo";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";

export const generateMetadata =  () => {
  return Seo({
    title: "Contacts",
    description : "Toutes les informations necessaires pour contacter votre humble serviteur que je suis.",
  })
}

export default function Contacts() {

  return (
    <> 
      <BasicLayout> 
        Contact
      </BasicLayout>
    </>
  );
}
