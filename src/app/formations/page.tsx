import { Navigation } from "@/components/navigation/navigation";
import Seo from "@/libs/seo";
import { Container } from "@/ui/components/container/container";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAccountPinBoxLine } from "react-icons/ri";

export const generateMetadata =  () => {
  return Seo({
    title: "Formations",
    description : "Toutes les impressionnates formations que j'ai suivies pour m'indroduire dans le merveilleux univers de la programmation",
  })
}

export default function Home() {

  return (
    <>
      <Navigation />
       <main className="max-w-screen min-h-screen flex flex-col items-center justify-center p-0 pt-10 m-0 mt-10">

      </main>
    </>
  );
}
