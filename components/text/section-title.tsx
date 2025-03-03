import { cn } from "@/lib/utils";
import { t } from "@/scripts/translate";

interface SectionTitleProps {
    label: string;
    className?: string;
}

export function SectionTitle({ label, className }: SectionTitleProps) {
    return (
        <h3 className={cn("text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] uppercase font-light leading-none", className)}>{t(label)}</h3>)
}