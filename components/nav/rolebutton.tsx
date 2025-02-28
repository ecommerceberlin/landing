
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/components/text/section-title";
import { t } from "@/scripts/translate";
import { MoreButton } from "@/components/nav/morebutton";

interface RoleButtonProps {
    className?: string
    baseLabel: string
    buttonHref?: string | null
}

export function RoleButton({ className, baseLabel, buttonHref = null }: RoleButtonProps) {
    return (
        <div className={cn("flex-1 p-3 pt-0", className)}>

            <SectionTitle label={`${baseLabel}.title`} />
            
            <div className="space-y-4 mt-10">
            <p className="text-lg font-light">{t(`${baseLabel}.description`)}</p>
            {buttonHref && <MoreButton label={`${baseLabel}.more`} href={buttonHref} variant="hero" size="hero" />}
            </div>

        </div>
    )
}