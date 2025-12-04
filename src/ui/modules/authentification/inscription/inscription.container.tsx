"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { InscriptionView } from "./inscription.view"
import { InscriptionFormFieldsType } from "@/types/forms"
import { useState } from "react";

export const InscriptionContainer = () => {

  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<InscriptionFormFieldsType>()

  const onSubmit : SubmitHandler<InscriptionFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log('formData => ', formData)
  }

    return (
      <div>
        <InscriptionView
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
  