"use client";

import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { WelcomeStep } from "./components/steps/welcome/welcomeStep";
import { onboardingStepInterface } from "@/types/onboardingStepsList";
import { ProfileStep } from "./components/steps/profile/profileStep";
import { AvatarStep } from "./components/steps/avatar/avatarStep";

export const OnboardingContainer = () => {

  /**
   * @currentStep : Etape actuelle de l'onboarding
   * @setCurrentStep : Fonction de mise à jour de l'étape actuelle
   * @stepsList : Liste des étapes de l'onboarding, chaque étape contient un id, un label et un composant à afficher
   * 
   */

  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepsList : onboardingStepInterface[] = [
    {
      id : 1,
      label : "Bienvenue",
      component : { step: WelcomeStep },
    },
    {
      id : 2,
      label : "Profil",
      component : { step: ProfileStep },
    },
    {
      id : 3,
      label : "Avatar",
      component : { step: AvatarStep },
    },
  ];

  //Recupère les données de l'étape en cours
  const getCurrentStep = () => { 
    return stepsList.find(step => step.id === currentStep);
  };
  const activeStep = getCurrentStep() || stepsList[0]

  //Fonctions de navigation entre les étapes
  const nextStep = () => currentStep < stepsList.length && setCurrentStep((currentStep) => currentStep + 1)
  const prevStep = () => currentStep > 1 && setCurrentStep((currentStep) => currentStep - 1)

  //Indicateurs d'étape
  const isFirstStep = currentStep === 1 ? true : false;
  const isLastStep = currentStep === stepsList.length ? true : false;

    return (
      <OnboardingView
        currentStep={activeStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        nextStep={nextStep}
        prevStep={prevStep}
        stepsList={stepsList}
      />
    )
  }
  