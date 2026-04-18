import { FormsType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input"
import { Textarea } from "@/ui/design-system/forms/textarea"

interface ProfileStepFormProps {
    formData: FormsType
}

export const ProfileStepForm = ({ formData }: ProfileStepFormProps) => {
    const {control, errors, register, isLoading} = formData
    return (
        <form className="w-full max-w-md space-y-4">
            <Input
                label="Nom d'utilisateur"
                id="displayName"
                placeholder="John Doe"
                type="text"
                isLoading={isLoading}
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="Le renseignement de ce champ est obligatoire"
            />
            <Input
                label="Spécialité"
                id="expertise"
                placeholder="Développeur frontend react freelance"
                type="text"
                isLoading={isLoading}
                isRequired={true}
                register={register}
                errors={errors}
                errorMessage="Le renseignement de ce champ est obligatoire"
            />
            <Textarea
                label="Biographie"
                id="biography"
                placeholder="Fais une courte description de ton parcours et de tes compétences pour qu'on puisse mieux te connaître !"
                isLoading={isLoading}
                isRequired={false}
                register={register}
                errors={errors}
                errorMessage="Le renseignement de ce champ est obligatoire"
            />
        </form>
    )
}