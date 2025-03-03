"use client"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import { basePriceCurrency, pricesNetGross } from '@/settings/app_rules'
import { formatCurrency } from '@/lib/utils'
import {t} from '@/scripts/translate'
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export function PremiumItemPrice({ticketId, className}: {ticketId: number, className?: string}) {

    const { data, isLoading, error } = useSWR(ticketId? `/api/tickets-premium`: null, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 6000,
        refreshInterval: 60000
    })

    const ticket = data?.find((ticket: any) => ticket.id === ticketId)

    if(isLoading || error || !ticket) {
        return <Skeleton className="w-[100px] h-10" />
    }


    return (
        <div className={cn("text-2xl font-semibold mr-5", className)}>
            {formatCurrency(ticket.price, basePriceCurrency)} {t(`common.${pricesNetGross}`)}
        </div>
    )
}