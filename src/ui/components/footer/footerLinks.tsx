import { ActiveLink } from "@/components/navigation/activeLink";
import { LinkTypes } from "@/libs/linksType";
import { FooterBlocks } from "@/types/appLinks";
import { Typography } from "@/ui/design-system/typography/typography";
import { v4 as uuidv4 } from 'uuid';

export const FooterLinks = ({label, content}:FooterBlocks) => {

    const node = content && content.map(link => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.link} className="flex flex-col">{link.label}</ActiveLink>
            )}

            {link.type === LinkTypes.EXTERNAL && (
               <a href={link.link} target="_blank">{link.label}</a>
            )}
        </div>
    ))

    return (
        <div className="min-w-[190px] flex flex-col gap-1">
            <Typography theme="white" variant="caption2" weigth="medium" className="pb-5">
                {label}
            </Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4">
                {node}
            </Typography>
        </div>
    )
}