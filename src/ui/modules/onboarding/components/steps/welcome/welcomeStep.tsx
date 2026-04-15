import { BaseComponentProps } from "@/types/onboardingStepsList"
import { OnboardingFooter } from "../../footer/footer"

export const WelcomeStep = ({
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
}:BaseComponentProps) => {
    return (
       <div className="relative w-full h-screen flex flex-col">
            <div>Etape Bienvenue</div>
            <OnboardingFooter
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                next={nextStep}
            />
       </div>
    )
}