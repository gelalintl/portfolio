import { BaseComponentProps } from "@/types/onboardingStepsList"


export const OnboardingView = (
    { currentStep, 
      isFirstStep, 
      isLastStep, 
      nextStep, 
      prevStep, 
      stepsList 
    } : BaseComponentProps) => {
      if(currentStep()?.component){
        const StepComponent = currentStep()?.component.step;
        return (
          <>
            {StepComponent && (
              <StepComponent
                currentStep={currentStep}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                nextStep={nextStep}
                prevStep={prevStep}
                stepsList={stepsList}
              />
            )
            }
          </>
        )
      }
      
      return null;
    }

  