"use client"
import { useTicket } from "@/hooks/use-ticket"
import { t } from "@/scripts/translate"
import { cn } from "@/lib/utils"

export function PremiumItemStatus({ticketId, className, size}: {ticketId: number, className?: string, size?: "small" | "large"}) {

    const ticket = useTicket(ticketId)

    if(ticket === null) {
        return null
    }

    if(ticket.remaining > 0) {
         return null
    }

    return <div className={cn("absolute inset-0 flex flex-col items-center justify-center z-9 w-full [&~img]:grayscale ", 
    size === "small" && "bg-black/60 text-white/90 text-[3rem] md:text-[5rem]",
    size === "large" && "bg-transparent text-black/50 text-[5rem] md:text-[8rem]",
    className)}>
        <div className="text-center -rotate-20 font-extralight w-full overflow-hidden uppercase tracking-tighter mb-10">{t("common.soldout")}</div>
    </div>
}
