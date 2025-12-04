interface ImportantProps{
    children : React.ReactNode,
}

export const Important = ({children}: ImportantProps) =>{
    return (
    <>
        <span className="relative">
            <span className="text-primary-400 blur-md">{children}</span>
            <span className="text-primary left-0 absolute">{children}</span>
        </span>
    </>
)
}