import { cn } from "@/lib/utils";
import {t} from '@/scripts/translate'

interface SectionSecondaryTitleProps {
    label: string;
    className?: string;
}

export function SectionSecondaryTitle({ label, className }: SectionSecondaryTitleProps) {
    return (
        <h3 className={cn("text-[2rem] uppercase font-extralight leading-none", className)}>{t(label)}</h3>)
}