import { onboardingStepInterface } from "@/types/onboardingStepsList";
import { Typography } from "@/ui/design-system/typography/typography";

interface OnboardingTabsProps {
    tabs: onboardingStepInterface[];
    currentStep:  onboardingStepInterface ;
}

export const OnboardingTabs = ({ tabs, currentStep }: OnboardingTabsProps) => {

    return (
        <div className="relative inline-block">
            <div className="flex items-center space-x-6">
                {tabs && tabs.map(
                    (tab) => (
                        <div key={tab.id} className={`
                        relative z-10 py-2.5 border-b-[2px]
                        ${currentStep && currentStep.id === tab.id ? "border-primary" : "border-gray-400"}
                        `}>
                            <Typography 
                                variant="caption3" 
                                balise="span" 
                                theme={`${currentStep && currentStep.id === tab.id ? "primary" : "gray-light"}`} 
                                weigth="medium"
                            >
                                {tab.label}
                            </Typography>
                        </div>
                    )
                )}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>
        </div>
    )
}