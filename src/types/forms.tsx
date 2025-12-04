export interface FormsType  {
    control? : any,
    onSubmit : any,
    errors : any,
    isLoading: boolean,
    register: any,
    handleSubmit: any,
}

export interface InscriptionFormFieldsType {
    email: string,
    password: string,
    wayYouKnowUs: string,
}

export interface LoginFormFieldsType {
    email: string,
    password: string,
}

export interface LostPasswordFormFieldType {
    email: string,
    password: string,
    wayYouKnowUs: string,
}