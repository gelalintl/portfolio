'use client';

import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import { Container } from "../container/container";
import { Crumb, crumbsList } from "@/types/crumbs";

interface BreadcrumbProps {
    visible?: boolean,
}

export const Breadcrumb = ({visible = true}:BreadcrumbProps) => {

    const pathname = usePathname();

    const segments = pathname.split("/");    

    const breadcrumbMaker =  () => {
        const pages:Crumb[] = []
        segments.map((item) => {
            crumbsList.map(crumb => {
                crumb.key === item && pages.push(crumb)
            })
        })
        return pages
    }

    const lastIndex = breadcrumbMaker().length - 1

    const breadcrumb = breadcrumbMaker().map((item,index) => (

        <span key={uuidv4()} className={`${index === lastIndex && "text-gray-900"} hover:text-gray-900`}>
            {index !== lastIndex && (
                <Link href={item.href}>
                    {item.label !== "Accueil" ? item.label : <RiHome3Line className="inline -mt-0.5"/>} {index !== lastIndex && ">" } 
                </Link>
                )}
            {index === lastIndex && (<span>{item.label}</span>)}
        </span>
    ))

  return (
    <>
        {visible && (
            <Container className="mt-2.5 mb-5">
                <Typography variant="caption1" balise="span" theme="gray" className="flex gap-2">
                    {breadcrumb}
                </Typography>
            </Container>
        )}
    </>
  )
}
