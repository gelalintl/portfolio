import { BaseComponentProps } from "@/types/onboardingStepsList"
import { Button } from "@/ui/design-system/button/button"

export const ProfileStep = ({
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
}:BaseComponentProps) => {
    return (
        <>
            <div>Etape Profile</div>
            <div className="flex flex-row w-full items-center justify-between pr-2 pl-2">
                <Button onClick={prevStep} variant={isFirstStep ? "disabled":  "accent"}>
                     Précédent
                </Button>
                <Button onClick={nextStep} variant={isLastStep ? "disabled":  "accent"}>
                    Suivant
                </Button>
            </div>
        </>
    )
}