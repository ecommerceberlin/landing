"use client"

import { basePriceCurrency, pricesNetGross } from '@/settings/app_rules'
import { formatCurrency } from '@/lib/utils'
import {t} from '@/scripts/translate'
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { useTicket } from "@/hooks/use-ticket"

export function PremiumItemPrice({ticketId, className}: {ticketId: number, className?: string}) {
    const ticket = useTicket(ticketId)

    if(ticket === null) {
        return <Skeleton className="w-[100px] h-10" />
    }

    return (
        <div className={cn("text-2xl font-semibold mr-5", className)}>
            {formatCurrency(ticket.price, basePriceCurrency)} {t(`common.${pricesNetGross}`)}
        </div>
    )
}