import { IconProps } from "@/types/iconProps"
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/libs/linksType";
import Link from "next/link";

interface ButtonProps {
    size? : "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "icon" | "success";
    icon? : IconProps;
    iconTheme? : "accent" | "secondary" | "gray";
    iconPosition? : "left" | "right";
    isDisabled?: boolean;
    isLoading? : boolean;
    className?: string;
    children?: React.ReactNode;
    baseUrl? : string,
    linkType? : LinkType,
    type? : "button" | "submit",
    fullWidth? : boolean,
    onClick?: () => void,
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  isDisabled,
  isLoading,
  className,
  children, 
  baseUrl, 
  linkType = LinkTypes.INTERNAL,
  type = "button",
  fullWidth = false,
  onClick,
}:ButtonProps) => {

  let variantClass : string = "", sizeClass: string = "", iconSize : number = 0;

  switch (variant) {
    case "accent": //default
      variantClass = "bg-primary hover:bg-primary-400 text-white rounded";
    break;
    case "secondary":
      variantClass = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
    break;
    case "outline":
      variantClass = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
    break;
    case "disabled":
      variantClass = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
    break;
    case "success":
      variantClass = "bg-secondary hover:bg-secondary-400 text-white rounded";
    break;
    case "icon":
      if (iconTheme === "accent") {
        variantClass = "bg-primary hover:bg-primary-400 text-white rounded-full"
      } 
      else if(iconTheme === "secondary") {
        variantClass = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
      }
      else {
        variantClass = "bg-gray-800 hover:bg-gray-700 text-white rounded-full"
      }
    break;
  }

  switch (size) {
    case "medium": //default
      if (icon && variant === "icon") {
        iconSize = 20;
        sizeClass = `text-caption2 font-medium w-[50px] h-[50px] flex items-center justify-center`;
      } 
      else {sizeClass = `text-caption2 font-medium px-[18px] py-[15px]`;}
    break;
    case "small":
      if (icon && variant === "icon") {
        iconSize = 18;
        sizeClass = `text-caption3 font-medium w-[40px] h-[40px] flex items-center justify-center`;
      }
      else {sizeClass = `text-caption3 font-medium px-[14px] py-[12px]`;}
    break;
    case "large":
      if (icon && variant === "icon") {
        iconSize = 24;
        sizeClass = `text-caption1 font-medium w-[60px] h-[60px] flex items-center justify-center`;
      }
      else {sizeClass = `text-caption1 font-medium px-[22px] py-[18px]`;}
    break;
  }

  const buttonContent = (
    <>
      {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {variant === "accent" || variant === "icon" && iconTheme !== "secondary"
              ? (<Spinner size="small" variant='white'></Spinner>) 
              : (<Spinner size="small"></Spinner>)
            }
          </div>
        )}

        <div className={`${isLoading && "invisible"}`}>
          {icon && variant === "icon" 
            ? (
              <>
                <icon.icon size={iconSize} />
              </>
            ) 
            : 
            (icon && iconPosition 
              ? (iconPosition === "left" 
                  ?
                    <div className="flex items-center gap-1">
                      <icon.icon size={iconSize} />
                      {children}
                    </div>
                  :
                    <div className="flex items-center gap-1">
                      {children}
                      <icon.icon size={iconSize} />
                    </div>
                )
              :
              <>
                {children}
              </>
            )
          }
        </div>  
    </>
  )

  const buttonElement = (
    <button 
        type={type}
        onClick={onClick}
        className={`${variantClass} ${sizeClass} ${iconSize} ${isLoading && "cursor-wait"} ${fullWidth && "w-full"} relative animate`}
        disabled = {isDisabled || isLoading ? true : false}
      >   
        {buttonContent}
      </button>
  )

  if (baseUrl && !onClick){
    if(linkType === LinkTypes.EXTERNAL){
      return (
        <a href={baseUrl} target="_blank">{buttonElement}</a>
      )
    } 
    else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }

  if (baseUrl && onClick) {
    console.warn("Le composant Button ne doit pas recevoir un Url et une action au clic!!");
  }
  
  return buttonElement;
}
