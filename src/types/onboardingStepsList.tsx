import React from "react";

export interface BaseComponentProps {
    isFirstStep: boolean;
    isLastStep: boolean;
    nextStep: () => void;
    prevStep: () => void;
    stepsList: onboardingStepInterface[];
    currentStep: onboardingStepInterface;
}

export interface onboardingStepInterface {
    id: number;
    label: string;
    component: {
        step : React.ComponentType<BaseComponentProps>
    };
}