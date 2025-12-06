import { Typography } from "../typography/typography"

interface InputProps{
    isLoading: boolean,
    placeholder : string,
    type?: "text" | "email" | "password",
    register: any,
    errors: any,
    errorMessage? : string,
    id: string,
    isRequired?: boolean,
    isAutocompleted?: boolean,
    className?: string,
}


export const Input = ({
    type = "text", 
    id,
    placeholder,
    register,
    errors,
    errorMessage = "Champ obligatoire.",
    isRequired = true,
    isLoading,
    isAutocompleted = false,  
    className,  
 }: InputProps) => {

  const errorTheme =
    errors[id]?.type === "minLength" ||
    errors[id]?.type === "weak-password"
      ? "warning"
      : "danger";

  return (
    <div className="space-y-3">
        <input 
          type={type} 
          placeholder={placeholder} 
          className={`
            ${errors[id] ? "placeholder-danger text-alert-danger" : "placeholder-gray-500"}
            w-full p-4 font-light border border-gray-400 rounded 
            focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder-gray-600
            ${isLoading && "cursor-not-allowed"} 
            ${className && className}
            `} 
          disabled = {isLoading}
          {...register(id, {
            required : { 
              value: isRequired, 
              message : errorMessage,
            },
          })}
          autoComplete={isAutocompleted ? "on" : "off"}
        />
        {errors[id] && (
            <Typography variant="caption4" balise="div" theme={errorTheme}>
                {errors[id].message}
            </Typography>
        )}
    </div>
  )
}
