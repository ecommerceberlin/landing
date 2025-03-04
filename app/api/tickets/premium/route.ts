import { NextRequest, NextResponse } from "next/server"
import { transformToApiTicketPremiumDTO } from "@/db/ticket/premium-ticket-transformer"
import { items } from "@/settings/premium"

export const dynamic = 'force-dynamic' // Remove route cache
export const runtime = 'edge'

export async function GET(request: NextRequest) {
    try {
        const ticketIds = items.map((item) => Number(item.ticketId))

        const response = await fetch(`${process.env.API_READONLY_URL}/tickets`, {
            next: { 
                revalidate: 600,
                tags: ['tickets-premium'] 
            }
        })

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        const premiumTickets = data?.data?.filter((ticket: any) => ticketIds.includes(ticket.id))
        const premiumTicketsDTO = premiumTickets.map(transformToApiTicketPremiumDTO)

        return NextResponse.json(premiumTicketsDTO, {
            headers: {
                'Cache-Control': 'public, s-maxage=100, stale-while-revalidate=59'
            }
        })
    } catch (error) {
        // Error responses won't be cached
        return NextResponse.json(
            { error: 'Failed to fetch tickets' }, 
            { status: 500, headers: { 'Cache-Control': 'no-store' } }
        )
    }
}