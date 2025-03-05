import { cn } from "@/lib/utils";
import {t} from '@/scripts/translate'

interface SectionSecondaryTitleProps {
    label: string;
    className?: string;
}

export function Heading({ label, className }: SectionSecondaryTitleProps) {
    return (
        <h5 className={cn("text-[1.25rem] md:text-[1.50rem] xl:text-[1.75rem] 2xl:text-[2rem] uppercase font-light leading-none", className)}>{t(label)}</h5>)
}