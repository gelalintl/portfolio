interface TypographyProps {
    variant?: "display" | "h1" | "h2" | "h3" | "h4" |"h5" | "lead" | "body-base" |"body-lg" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    balise? : "h1" | "h2" | "h3" | "h4" |"h5" | "p" | "span" | "div";
    theme? : "black" | "white" | "gray" | "primary" | "secondary" | "danger" | "success" | "warning";
    weigth? : "regular" | "medium";
    className?: string;
    children : React.ReactNode;
}

export const Typography = ({
        variant = "h3", 
        balise : Component = "div",   
        theme = "black",
        weigth = "regular",
        className, 
        children}:TypographyProps) => {

    let variantClass : string = "";
    let themeClass : string = "";
    const fontWeightClass = weigth === "medium" ? "font-medium" : "font-regular";

    //Definit les classes du variant
    switch (variant) {
        case "display":
            variantClass = "text-8xl";
            break;
        case "h1":
            variantClass = "text-7xl";
        break;
        case "h2":
            variantClass = "text-6xl";
        break;
        case "h3": //Default
            variantClass = "text-5xl";
        break;  
        case "h4":
            variantClass = "text-4xl";
        break;
        case "h5":
            variantClass = "text-3xl";
        break;
        case "lead":
            variantClass = "text-2xl";
        break; 
        case "body-lg":
            variantClass = "text-2xl";
        break;  
        case "body-base":
            variantClass = "text-base";
        break;   
        case "body-sm":
            variantClass = "text-sm";
        break;      
        case "caption1":
            variantClass = "text-caption1";
        break; 
        case "caption2":
            variantClass = "text-caption2";
        break;    
        case "caption3":
            variantClass = "text-caption3";
        break;    
        case "caption4":
            variantClass = "text-caption4";
        break;
    }

    //Définit mes classes du thème
    switch (theme) {
        case "black": //Default
            themeClass = "text-gray";
        break;
        case "white":
            themeClass = "text-white";
        break;
        case "gray":
            themeClass = "text-gray-700";
        break;
        case "primary":
            themeClass = "text-primary";
        break;
        case "secondary":
            themeClass = "text-secondary";
        break;
        case "danger":
            themeClass = "text-alert-danger";
        break;
        case "success":
            themeClass = "text-alert-success";
        break;        
        case "warning":
            themeClass = "text-alert-warning";
        break;
        
        
    }

  return (
    <Component className={`${variantClass} ${themeClass} ${className || null} ${fontWeightClass}`}>
        {children}
    </Component>
  )
}
