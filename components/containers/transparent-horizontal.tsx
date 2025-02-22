import { cn } from "@/lib/utils"

interface TransparentHorizontalProps {
    children: React.ReactNode
    className?: string
}

export function TransparentHorizontal({ children, className }: TransparentHorizontalProps) {
    return (
        <div className={cn("my-20 w-full flex flex-col md:flex-row gap-4 items-center", className)}>
            {children}
        </div>
    )
}