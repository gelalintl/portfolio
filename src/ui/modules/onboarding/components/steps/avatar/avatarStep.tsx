import { BaseComponentProps } from "@/types/onboardingStepsList"
import { OnboardingStepLayout } from "../../stepsLayout/steps-layout"
import { Typography } from "@/ui/design-system/typography/typography"
import { Important } from "@/ui/design-system/effects/important"

export const AvatarStep = ({
    currentStep,
    stepsList,
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
}:BaseComponentProps) => {
    const rightContent = (
            <></>
        )
        return (
            <>
                <OnboardingStepLayout
                    currentStep={currentStep}
                    stepsList={stepsList}
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    rightContent={rightContent}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    prev={prevStep}
                >
                    <Typography variant="h1" balise="h1">
                        Dis nous en plus sur <Important>toi !!</Important>
                    </Typography>
                    <Typography variant="body-base" balise="p" className="text-justify">
                        Nous voulons en savoir plus sur toi pour te proposer une expérience personnalisée. 
                        Dis nous qui tu es, comment tu as atteri sur notre sexy plateforme. Nous sommes impatients de te connaître
                        mieux et de t'accompagner. Alors remplis notre petit formulaire d'introduction !!
                    </Typography>
                </OnboardingStepLayout>
            </>
        )
}