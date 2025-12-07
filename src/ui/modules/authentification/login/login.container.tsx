"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { LoginView } from "./login.view"
import { LoginFormFieldsType } from "@/types/forms"
import { useState } from "react";
import toast from "react-hot-toast";
import { FirebaseLoginUser } from "@/api/authentication";
import { FIREBASE_LOGIN_ERRORS } from "@/utils/firebaseAuthErrors";
import { useRouter } from "next/navigation";

export const LoginContainer = () => {

  const router = useRouter(); {/**Router initializing */}
  

  const [isLoading, setIsLoading] = useState(false)

   const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>()

  const handleLoginUserAuthentication = async ({email, password}:LoginFormFieldsType) => {

    toast.promise(
      FirebaseLoginUser(email, password), 
      {
        loading : "Connexion à votre compte en cours .....",
        success : "Vous êtes parfaitement connecter. Nous vous redirigeons vers votre tableau de bord...",
        error : (error) => {
          const firebaseError = error as {code?:string}
          const gotError = firebaseError.code ? FIREBASE_LOGIN_ERRORS[firebaseError.code] : null;

          if(gotError?.field){
            setError(gotError.field , {
              type: "manual",
              message: gotError.message,
            }
          )
            return gotError.message
          }
          console.log(error)
            return gotError?.message || "Une erreur est survenue. Veuillez réessayer!!"
        }
      }
    ).then(()=>{
        router.push("/user/dashboard")
    })
    .finally(()=> setIsLoading(false))
  }

  const onSubmit : SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    handleLoginUserAuthentication(formData)
  }

    return (
      <div>
        <LoginView
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
  