"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { LostPasswordView } from "./lostPassword.view"
import { LostPasswordFormFieldType } from "@/types/forms"
import { useState } from "react";

export const LostPasswordContainer = () => {

  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<LostPasswordFormFieldType>()

  const onSubmit : SubmitHandler<LostPasswordFormFieldType> = async (formData) => {
    setIsLoading(true);
    console.log('formData => ', formData)
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
  
  