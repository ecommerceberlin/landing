import { Button} from "@/components/ui/button"
import Link from 'next/link'
import { cn } from "@/lib/utils"
import {t} from '@/scripts/translate'



interface MoreButtonProps {
    label: string;
    href: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero";
    size?: "default" | "sm" | "lg" | "hero" | "icon";
}

export function MoreButton({label, href, className, variant="default", size="default"}: MoreButtonProps){
    return href.includes('http') ? (
        <Button className={className} asChild variant={variant} size={size}>
        <a href={href} target="_blank" rel="noopener noreferrer">
            {t(label)}
        </a>
        </Button>
    ) : (
        <Button className={className} asChild variant={variant} size={size}>
        <Link href={href}>{t(label)}</Link>
        </Button>
    )
}