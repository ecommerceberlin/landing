import { cn } from "@/lib/utils";
import {t} from '@/scripts/translate'

interface SectionSecondaryTitleProps {
    label: string;
    className?: string;
}

export function SectionSecondaryTitle({ label, className }: SectionSecondaryTitleProps) {
    return (
        <h4 className={cn("text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] uppercase font-extralight leading-none", className)}>{t(label)}</h4>)
}