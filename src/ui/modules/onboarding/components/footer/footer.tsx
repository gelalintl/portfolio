import { Button } from "@/ui/design-system/button/button";

interface OnboardingFooterProps {
    next?: () => void;
    prev?: () => void;
    isFirstStep?: boolean;
    isLastStep?: boolean;
    isLoading?: boolean;
}

/**
 * 
 * @isFirstStep : indique si l'étape courante est la première étape du processus d'onboarding 
 * @isLastStep : indique si l'étape courante est la dernière étape du processus d'onboarding
 * @isLoading : indique si une action est en cours de chargement
 * @next : fonction qui regroupe les actions à effectuer avant de passer à l'étape suivante
 * @prev : fonction de retour à l'étape précédente
 * 
 */

export const OnboardingFooter = ({
    isFirstStep,
    isLastStep,
    isLoading,
    next,
    prev,
}:OnboardingFooterProps) => {
    /**
     * @buttonTitle : le titre du bouton d'action qui change en fonction de l'étape courante
     * Si c'est la première étape, le bouton affichera "Démarrer"
     * Si c'est la dernière étape, le bouton affichera "Terminer"
     * Sinon, le bouton affichera "Continuer" pour permettre à l'utilisateur de continuer le processus d'onboarding
     */
    let buttonTitle:  string;

    if(isFirstStep){
        buttonTitle = "Démarrer"
    } else if(isLastStep){
        buttonTitle = "Terminer"
    }else {
        buttonTitle = "Continuer"
    }

    return (
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
            <div className={`flex flex-row items-center gap-5 
                ${prev && !next && "justify-start"}
                ${!prev && next && "justify-end"}
                ${prev && next && "justify-between"}
                `}>
                {prev && (
                    <Button 
                        isDisabled={isLoading}
                        variant={isLoading ? "disabled" : "outline"}
                        onClick={prev}
                    >
                        Précédent
                    </Button>
                )}
                {next && (
                    <Button
                        isLoading={isLoading}
                        onClick={next}
                    >
                        {buttonTitle}
                    </Button>
                )}
            </div>
        </div>
    )
} 