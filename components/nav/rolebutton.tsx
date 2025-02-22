import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/text/section-title";

interface RoleButtonProps {
    className?: string
}

export function RoleButton({ className }: RoleButtonProps) {
    return (
        <div className={cn("flex-1 p-3 pt-0", className)}>

            <SectionTitle label="ROLE" />
            

            <div className="space-y-4 mt-10">
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <Button>Role</Button>
            </div>

        </div>
    )
}