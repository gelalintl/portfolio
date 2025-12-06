"use client";

import { FormsType } from "@/types/forms"
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface InscriptionFormProps {
  form : FormsType
}

export const InscriptionForm = ({form}:InscriptionFormProps) => {

  const { onSubmit, errors, isLoading, register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input
          type = "email" 
          id = "email"
          placeholder = "mywonderful@email.com"
          register = {register}
          errors ={errors} 
          isLoading = {isLoading}
        />

        <Input
          type = "password" 
          id = "password"
          placeholder = "Mot de passe"
          register = {register}
          errors ={errors} 
          isLoading = {isLoading}
        />

        <Input
          id = "wayYouKnowUs"
          placeholder = "Comment nous avez-vous connus ?"
          register = {register}
          errors ={errors} 
          isLoading = {isLoading}
        />

        <Button isLoading={isLoading} type="submit" fullWidth> S'inscrire</Button>
    </form>
  )
}
