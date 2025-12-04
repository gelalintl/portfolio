'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const ActiveLink = ({href, children, className}: ActiveLinkProps) => {

    const pathname = usePathname();

    const isActive : boolean = useMemo(() => pathname === href, [pathname, href])

    return(
        <Link href={href} className={`${isActive && "text-primary font-medium"} ${className || ""}`}>{children}</Link>
    )
}