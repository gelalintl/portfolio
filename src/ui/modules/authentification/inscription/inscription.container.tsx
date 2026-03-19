"use client";

{/**    Firebase importations      */}
import { FIREBASE_CREATE_ERRORS } from "@/utils/firebaseAuthErrors";

{/**         Form Imports         */}
import { SubmitHandler, useForm } from "react-hook-form"
import { InscriptionFormFieldsType } from "@/types/forms"

{ /**       Others imports : view, and react hooks    */}
import { InscriptionView } from "./inscription.view"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FirebaseCreateUser, FirebaseSendEmailVerification } from "@/api/authentication";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/firestore";
import { saveDocument } from "@/api/firestoreServices";

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

  const handleCreateUserDocument = async(userID : string, email : string, wayYouKnow:string) => {
    const userData ={
      uid: userID,
      email: email,
      wayYouKnow: wayYouKnow,
      role: "user",
      onboardingStatus: "ongoing",
      createdAt: serverTimestamp(),
    }

    const {success} = await saveDocument("users", userID, userData);

    if(!success){
      throw new Error("Erreur lors de la création de l'utilisateur. Veuillez réessayer.")
    }

    return success;

  }

  const handleCreateUserAuthentication = async ({email, password, wayYouKnowUs}:InscriptionFormFieldsType) => {

    toast.promise(
      FirebaseCreateUser(email, password).then(async(user) => {
        if(user?.uid){   await handleCreateUserDocument(user.uid, email, wayYouKnowUs)  }
        return user;
      }),
      {
        loading : "Création de l'utilisateur en cours. Veuillez patienter....",
        success : "L'utilisateur a été créé avec succès. Redirection vers votre tableau de bord en cours ...",
        error: (error) => {
            const firebaseError = error as {code?: string}
            const gotError = firebaseError.code ? FIREBASE_CREATE_ERRORS[firebaseError.code] : null;

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
        FirebaseSendEmailVerification()
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
  