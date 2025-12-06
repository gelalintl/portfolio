"use client";

{/**    Firebase importations      */}
import { FIREBASE_AUTH_ERRORS } from "@/utils/firebaseAuthErrors";

{/**         Form Imports         */}
import { SubmitHandler, useForm } from "react-hook-form"
import { InscriptionFormFieldsType } from "@/types/forms"

{ /**       Others imports : view, and react hooks    */}
import { InscriptionView } from "./inscription.view"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FirebaseCreateUser } from "@/api/authentication";
import toast from "react-hot-toast";

export const InscriptionContainer = () => {

  const router = useRouter(); {/**Router initializing */}

  const [isLoading, setIsLoading] = useState(false); {/**Form loading state */}

  const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<InscriptionFormFieldsType>()

  const handleCreateUserAuthentication = async ({email, password}:InscriptionFormFieldsType) => {

    toast.promise(
      FirebaseCreateUser(email, password) ,
      {
        loading : "Création de l'utilisateur en cours. Veuillez patienter....",
        success : "L'utilisateur a été créé avec succès. Redirection vers votre tableau de bord en cours ...",
        error: (error) => {
            const firebaseError = error as {code?: string}
            const gotError = firebaseError.code ? FIREBASE_AUTH_ERRORS[firebaseError.code] : null;

            if(gotError?.field){
              setError(gotError.field , {
                  type: "manual",
                  message: gotError.message,
                }
              )
              return gotError.message
            }
            console.log(error)
            return "Une erreur est survenue. Veuillez réessayer!!"
        }
      }
    )
    .then(() =>{
      setTimeout(()=>{
        reset()
        setIsLoading(false)
        router.push("/user/dashboard")
      },2200)
    })
    .finally(()=>{
      setIsLoading(false)
    })

  }

  const onSubmit : SubmitHandler<InscriptionFormFieldsType> = async (formData) => {
    setIsLoading(true);  {/**  Loading form    */}
    handleCreateUserAuthentication(formData);
  }

    return (
      <div>
        <InscriptionView
          form = {{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
          }}
        />
      </div>
    )
  }
  