import { BaseComponentProps, onboardingStepInterface } from "@/types/onboardingStepsList"
import { Container } from "@/ui/components/container/container"
import { OnboardingFooter } from "../footer/footer";
import { OnboardingTabs } from "../tabs/tabs";

export interface OnboardingStepLayoutProps extends BaseComponentProps {
    children: React.ReactNode;
    rightContent?: React.ReactNode;
    next?: () => void;
    prev?: () => void;
    isLoading?: boolean;
}

export const OnboardingStepLayout = ({
    children,
    rightContent,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isLoading = false,
    stepsList,
    currentStep,
    next,
    prev
}: OnboardingStepLayoutProps) => {
    return (
        <div className="relative w-full h-screen flex flex-col">
            <div className="h-full overflow-auto flex items-center">
                <Container className="h-full grid grid-cols-12">
                    <div className="relative z-10 flex items-center text-left h-full col-span-12 md:col-span-6 py-10">
                        <div className="w-full pb-4.5 space-y-5">
                            {/* On passe l'objet currentStep directement aux tabs */}
                            <OnboardingTabs tabs={stepsList} currentStep={currentStep} />
                            {children}
                        </div>
                    </div>
                    <div className="flex items-center h-full col-span-6">
                        {rightContent || null}
                    </div>
                </Container>
            </div>
            <OnboardingFooter
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                isLoading={isLoading}
                next={next || (isLastStep ? undefined : nextStep)}
                prev={prev || (isFirstStep ? undefined : prevStep)}
            />
        </div>
    )
}