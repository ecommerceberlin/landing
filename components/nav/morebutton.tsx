"use client"

import { Button} from "@/components/ui/button"
import Link from 'next/link'
import {t} from '@/scripts/translate'
import { isExternalLink } from "@/lib/utils"
import { useRouter } from "next/navigation"
import {cn} from "@/lib/utils"


interface MoreButtonProps {
    label: string;
    href: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero";
    size?: "default" | "sm" | "lg" | "hero" | "icon";
}

export function MoreButton({label, href, className, variant="default", size="default"}: MoreButtonProps){

    const {push} = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isExternalLink(href)) {
            window.open(href, '_blank')
        } else {
            push(href)
        }
    }
    return isExternalLink(href) ? (
        <Button className={className} asChild variant={variant} size={size}>
        <a href={href} target="_blank" rel="noopener noreferrer">
            {t(label)}
        </a>
        </Button>
    ) : (
        <Button onClick={handleClick} className={cn(className, "cursor-pointer")} variant={variant} size={size}>
        {t(label)}
        </Button>
    )
}