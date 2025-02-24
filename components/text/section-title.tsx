import { cn } from "@/lib/utils";
interface SectionTitleProps {
    label: string;
    className?: string;
}

export function SectionTitle({ label, className }: SectionTitleProps) {
    return (
        <h3 className={cn("text-[3rem] uppercase font-light", className)}>{label}</h3>)
}