import { BaseComponentProps } from "@/types/onboardingStepsList"
import { Important } from "@/ui/design-system/effects/important"
import { Typography } from "@/ui/design-system/typography/typography"
import { OnboardingStepLayout } from "../../stepsLayout/steps-layout"
import { ProfileStepForm } from "./profileStepForm"
import { SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType } from "@/types/forms"
import { useToggle } from "@/hooks/useToggle"
import { useAuth } from "@/context/AuthContext"
import { updateDocument } from "@/api/firestoreServices"
import toast from "react-hot-toast"
import { FIRESTORE_UPDATE_ERRORS } from "@/utils/firestoreErrors"
import { useEffect } from "react"

export const ProfileStep = ({
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    stepsList,
    currentStep,
}:BaseComponentProps) => {

    const {value: isLoading, setValue: setIsLoading }= useToggle()
    const {authUser} = useAuth()

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        setError
    } = useForm<OnboardingProfileFormFieldsType>()

    const {displayName, expertise, biography} = authUser?.userDocument || {};

    useEffect(()=>{
        if(displayName) setValue("displayName", displayName)
        if(expertise) setValue("expertise", expertise)
        if(biography) setValue("biography", biography)
    },[])

    const isNeededToUpdate = (formData: OnboardingProfileFormFieldsType) => {
        if(
            displayName !== formData.displayName || 
            expertise !== formData.expertise || 
            biography !== formData.biography
        ) return true;

        return false;
    }

    const handleUpdateUserDocument = async (formData: OnboardingProfileFormFieldsType) => {
        //Si l'utilisateur n'est pas authentifié, on ne peut pas mettre à jour son document
        if(!authUser?.uid) {
            setIsLoading(false)
            return;
        };

        const result = await updateDocument("users", authUser.uid, formData)

        if(result.success){
            //Si tout se passe bien, on affiche un message de succès et on passe à l'étape suivante
            toast.success("Profil mis à jour avec succès !")
            setIsLoading(false)
            reset()
            nextStep()
        }
        else{
            //Sinon, on affiche un message d'erreur et on réactive le formulaire pour que l'utilisateur puisse réessayer
            const firestoreError = result.error as {code?: string}
            const gotError = firestoreError.code ? FIRESTORE_UPDATE_ERRORS[firestoreError.code] : null;

            if (gotError?.field) {
                setError(gotError.field as keyof OnboardingProfileFormFieldsType | "root", 
                    { type: "manual", message: gotError.message }
                );
            }

            // Affichage du Toast même si erreur field (ou erreur générique)
            toast.error(gotError?.message || "Une erreur est survenue lors de la sauvegarde.");

            setIsLoading(false)
        }        
    }

    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (formData) => {
        setIsLoading(true)

        if(isNeededToUpdate(formData)){
            await handleUpdateUserDocument(formData)
        }
        else{
            setIsLoading(false)
            nextStep()
        }
    }

    const rightContent = (
        <div className="flex w-full justify-end">
            <ProfileStepForm
                formData  = {
                    {
                        errors,
                        register,
                        control,
                        handleSubmit,
                        onSubmit,
                        isLoading,
                    }
                }
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
                isLoading={isLoading}
                rightContent={rightContent}
                nextStep={nextStep}
                prevStep={prevStep}
                next={handleSubmit(onSubmit)}
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