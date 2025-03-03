import { cn } from "@/lib/utils"

interface TransparentHorizontalProps {
    children: React.ReactNode
    className?: string
}

export function BoxWithHorizontalItems({ children, className }: TransparentHorizontalProps) {
    return (
        <div className={cn("w-full flex flex-col md:flex-row gap-4 items-start", className)}>
            {children}
        </div>
    )
}