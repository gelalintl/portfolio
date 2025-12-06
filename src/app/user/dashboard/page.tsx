import { Navigation } from "@/components/navigation/navigation";
import Seo from "@/libs/seo";

export const generateMetadata =  () => {
  return Seo({
    title: "Tableau de bord",
    description : "Bienvenu(e) dans votre tableau de bord utilisateur.",
  })
}

export default function Dashboard() {

  return (
    <>
      <Navigation />
       <main className="max-w-screen min-h-screen flex flex-col items-center justify-center p-0 pt-10 m-0 mt-10">
        Dashbord
      </main>
    </>
  );
}