import Image from "next/image";

interface AvatarProps {
    size? : "small" | "medium" | "large";
    src?: string;
    alt?: string;
    className?: string;
}

export const Avatar = ({size = "medium", src="/assets/images/bear.jpg", alt="avatar", className}: AvatarProps) => {

    let sizeLogo : string = "";

    switch (size) {
        case "small":
            sizeLogo = "w-[24px] h-[24px]";
            break;
        case "medium":
            sizeLogo = "w-[34px] h-[34px]";
            break;
        case "large":
            sizeLogo = "w-[50px] h-[50px]";
            break;
    }

    return(
        <div className={`${sizeLogo} bg-gray-400 rounded-full relative overflow-hidden`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizeLogo}
                className={`rounded-full object-cover object-center ${className || ""}`}
            />
        </div>
    )
}