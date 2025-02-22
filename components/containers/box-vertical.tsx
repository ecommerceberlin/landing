import { cn } from "@/lib/utils";
interface TransparentVerticalProps {
    className?: string;
    children: React.ReactNode;
}   

export function BoxWithVerticalItems({ children, className }: TransparentVerticalProps) {
    return (
        <div className={cn("my-20 w-full flex flex-col gap-16 items-center", className)}>
            {children}
        </div>
    )
}