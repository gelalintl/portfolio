interface ContainerProps {
    children : React.ReactNode;
    className? : string;
}

export const Container = ({children, className} : ContainerProps) =>{
    return (
        <div className={`w-full max-w-7xl mx-auto px-5 lg:px-10 ${className || ""}`}>
            {children}
        </div>
    )
}