import { cn } from "@/lib/utils";
import { t } from "@/scripts/translate";

interface SectionTitleProps {
    label: string;
    className?: string;
}

export function SectionTitle({ label, className }: SectionTitleProps) {
    return (
        <h3 className={cn("text-[3rem] uppercase font-light", className)}>{t(label)}</h3>)
}