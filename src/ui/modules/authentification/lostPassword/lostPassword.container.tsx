"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { LostPasswordView } from "./lostPassword.view"
import { LostPasswordFormFieldType } from "@/types/forms"
import { useState } from "react";
import toast from "react-hot-toast";
import { FirebaseLostPassword } from "@/api/authentication";
import { FIREBASE_LOSTPASSWORD_ERRORS } from "@/utils/firebaseAuthErrors";
import { useRouter } from "next/navigation";

export const LostPasswordContainer = () => {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<LostPasswordFormFieldType>()

  const handleLostPassword = async({email}:LostPasswordFormFieldType) =>{

    toast.promise(
      FirebaseLostPassword(email),
      {
        loading: "Patientez, un email va bientôt vous être envoyé...",
        success: "Vérifiez votre adresse mail pour récupérer votre mot de passe.",
        error: (error) => {
          const firebaseError = error as {code?: string}
          const gotError = firebaseError.code ? FIREBASE_LOSTPASSWORD_ERRORS[firebaseError.code] : null

          if(gotError?.field){
            setError(gotError.field , {
                type: "manual",
                message: gotError.message,
              }
            )
            return gotError.message
          }
          return "Une erreur est survenue. Veuillez réessayer!!"
        }
      }
    )
    .then(() => {
      setTimeout(()=>{
        router.push("/connexion")
      }, 2200)
    })
    .finally(()=> setIsLoading(false))
  }

  const onSubmit : SubmitHandler<LostPasswordFormFieldType> = async (formData) => {
    setIsLoading(true);
    handleLostPassword(formData)
  }

    return (
      <div>
        <LostPasswordView
          form = {{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
          }}
        />
      </div>
    )
  }
  
  