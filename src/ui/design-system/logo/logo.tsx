import logo from "../../../../public/assets/svg/logo.svg";

interface LogoProps {
    size? : "very-small" | "small" | "medium" | "large";
}

export const Logo = ({size = "medium"}: LogoProps) => {

    let sizeLogo : number = 0;

    switch (size) {
        case "very-small":
            sizeLogo = 34;
            break;
        case "small":
            sizeLogo = 61;
            break;
        case "medium":
            sizeLogo = 88;
            break;
        case "large":
            sizeLogo = 140;
            break;
    }

    return(
        <>
            <img 
                src={logo.src}
                width={sizeLogo}
                height={sizeLogo}
            />
        </>
    )
}