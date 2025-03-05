
import {cn} from "@/lib/utils";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/x'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/youtube'

interface SocialLink {
    label: string;
    href: string;
}

export function SocialLinks({links, className}: {links: SocialLink[], className?: string}) {

    return (<div className={cn("flex flex-row gap-4 my-8", className)}>{links.map((link) => {
        return (
        <SocialIcon key={link.href} url={link.href} bgColor="transparent" fgColor="black" />
        )})}
    </div>
    )
}