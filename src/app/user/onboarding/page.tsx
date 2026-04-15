import Seo from "@/libs/seo";
import { PlainLayout } from "@/ui/components/layouts/plainLayout";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export const generateMetadata =  () => {
  return Seo({
    title: "Onboarding",
    description : "Bienvenu(e) dans votre processus d'onboarding.",
  })
}

export default function Onboarding() {
  return (
    <PlainLayout>
      <div className="flex flex-col w-full justify-center items-center">
        <OnboardingContainer />
      </div>
    </PlainLayout>
  );
}