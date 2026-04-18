import { Important } from "@/ui/design-system/effects/important"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { OnboardingStepLayout } from "../../stepsLayout/steps-layout"
import { BaseComponentProps } from "@/types/onboardingStepsList"

export const WelcomeStep = ({
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    stepsList,
    currentStep,
}:BaseComponentProps) => {
    const rightContent = (
        <div className="w-full relative">
            <Image 
                src="/assets/svg/handshake.svg" 
                alt="Logo de Next.js pour marquer la technologie employée."
                width={811}
                height={596}
                className="top-[30%] right-0 -z-10 opacity-50"
            />
        </div>
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
            >
                <Typography variant="h1" balise="h1">
                    Bienvenue sur notre <Important>plateforme !!!</Important>
                </Typography>
                <Typography variant="body-base" balise="p" className="text-justify">
                    Ceci est un eplateforme de training pour développeur junior. Ici la phase d'onboarding 
                    est mis en avant pour vous permettre de découvrir les différentes fonctionnalités de qui peuvent
                    être implémentez. Alors, prêt à commencer votre aventure de développement  
                    avec nous ?
                </Typography>
            </OnboardingStepLayout>
        </>
    )
}