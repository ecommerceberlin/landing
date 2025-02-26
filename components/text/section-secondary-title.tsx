import { cn } from "@/lib/utils";
interface SectionSecondaryTitleProps {
    label: string;
    className?: string;
}

export function SectionSecondaryTitle({ label, className }: SectionSecondaryTitleProps) {
    return (
        <h3 className={cn("text-[2rem] uppercase font-extralight", className)}>{label}</h3>)
}