import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/text/section-title";
import Link from "next/link";


interface RoleButtonProps {
    className?: string
    label: string
    description: string
    buttonLabel: string
    buttonHref: string
}

export function RoleButton({ className, label, description, buttonLabel, buttonHref = "/" }: RoleButtonProps) {
    return (
        <div className={cn("flex-1 p-3 pt-0", className)}>

            <SectionTitle label={label} />
            

            <div className="space-y-4 mt-10">
            <p className="text-lg font-light">{description}</p>
            <Button asChild>
                <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
            </div>

        </div>
    )
}