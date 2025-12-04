"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { LoginView } from "./login.view"
import { LoginFormFieldsType } from "@/types/forms"
import { useState } from "react";

export const LoginContainer = () => {

  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    formState : { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>()

  const onSubmit : SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log('formData => ', formData)
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
  