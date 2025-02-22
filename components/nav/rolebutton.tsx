import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"

interface RoleButtonProps {
    className?: string
}

export function RoleButton({ className }: RoleButtonProps) {
    return (
        <div className={cn("flex-1 p-3 pt-0", className)}>

            <h3 className="text-[3rem] uppercase font-extralight">Role</h3>

            <div className="space-y-4 mt-10">
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <Button>Role</Button>
            </div>

        </div>
    )
}