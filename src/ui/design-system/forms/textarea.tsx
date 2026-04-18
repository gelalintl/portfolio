import { Typography } from "../typography/typography"

interface TextareaProps {
    id: string,
    label?:string,
    placeholder : string,
    rows?: number,
    isLoading: boolean,
    register: any,
    errors: any,
    errorMessage? : string,
    isRequired?: boolean,
    isAutocompleted?: boolean,
    className?: string,
}

export const Textarea = ({ 
    isLoading, 
    placeholder, 
    register, 
    errors, 
    errorMessage, 
    id, 
    isRequired, 
    isAutocompleted, 
    className, 
    label,
    rows = 5,}: TextareaProps) => {

        return (
            <div className="space-y-3">
                {label && (
                    <Typography variant="caption3" balise="div" theme={`${errors[id] ? "danger" : "gray"}`}>
                        {label}
                    </Typography>
                )}
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={rows}
                    disabled={isLoading}
                    {...register(id, {
                        required : { 
                        value: isRequired, 
                        message : errorMessage,
                        },
                    })}
                    className={`
                        w-full p-4 font-light border rounded focus:ring-1 focus:outline-none focus:ring-primary border-gray-400
                        ${isLoading ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white"}
                        ${errors[id] ? "placeholder-danger text-alert-danger" : "placeholder-gray-500"}
                        ${className && className}
                    `}
                    autoComplete={isAutocompleted ? "on" : "off"}
                />
                {errors[id] && (
                    <Typography variant="caption4" balise="div" theme="danger">
                        {errors[id].message}
                    </Typography>
                )}
            </div>
        )
}