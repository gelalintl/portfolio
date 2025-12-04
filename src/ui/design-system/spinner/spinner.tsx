interface SpinnerProps {
    size? : "small" | "medium" | "large";
    variant?: "primary" | "white";
    className?: string;
    children?: React.ReactNode;
}

export const Spinner = ({size = "medium", variant = "primary", className, children}: SpinnerProps) => {

    let variantClass : string = "", sizeClass : string = "";

    switch (size) {
        case "small":
            sizeClass = "w-5 h-5";
            break;
        case "medium": //default
            sizeClass = "w-9 h-9";
            break;
        case "large":
            sizeClass = "w-12 h-12";
            break;
    }

    switch (variant) {
        case "primary": //default
            variantClass = "text-primary";
            break;
    
        case "white":
            variantClass = "text-white";
            break;
    }

    return (
        <svg
            role="spinner"
            className={`${sizeClass} ${variantClass} animate-spin`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )
}