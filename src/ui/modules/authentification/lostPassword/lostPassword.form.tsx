"use client";

import { FormsType } from "@/types/forms"
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface LostPasswordFormProps {
  form : FormsType
}

export const LostPasswordForm = ({form}:LostPasswordFormProps) => {

  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  
  console.log('form', form)

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
        <Button isLoading={isLoading} type="submit" fullWidth>Envoyer</Button>
    </form>
  )
}
