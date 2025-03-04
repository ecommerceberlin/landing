import { basePriceCurrency } from "@/settings/app_rules"

export type ApiTicketPremiumDTO = {
    id: number
    price: string
    bookable: boolean
    start: string
    end: string 
    remaining: number
    in_dates: number
    errors: string[]
} 


export function transformToApiTicketPremiumDTO(ticket: any): ApiTicketPremiumDTO {
    return {
        id: ticket.id,
        price: basePriceCurrency === "EUR" ? ticket.price.en : ticket.price.pl,
        bookable: ticket.bookable,
        start: ticket.start,
        end: ticket.end,
        remaining: Number(ticket.remaining),
        in_dates: Number(ticket.in_dates),
        errors: ticket.errors
    }
}