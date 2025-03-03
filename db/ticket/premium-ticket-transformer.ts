import { basePriceCurrency } from "@/settings/app_rules"

export type ApiTicketPremiumDTO = {
    id: number
    price: string
    bookable: boolean
    start: string
    end: string 
    remaining: number
    errors: string[]
} 


export function transformToApiTicketPremiumDTO(ticket: any): ApiTicketPremiumDTO {
    return {
        id: ticket.id,
        price: basePriceCurrency === "EUR" ? ticket.price.en : ticket.price.pl,
        bookable: ticket.bookable,
        start: ticket.start,
        end: ticket.end,
        remaining: ticket.remaining,
        errors: ticket.errors
    }
}