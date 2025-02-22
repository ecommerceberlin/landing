import { NextRequest, NextResponse } from "next/server"
import { getParticipantsByRole } from "@/db/participant/get-participants-by-role"
import { transformToPresenterDTO } from "@/db/participant/transformer"

export const revalidate = 600
export const runtime = 'edge' // Enable edge runtime

export async function GET(request: NextRequest) {
    const presenters = await getParticipantsByRole("presenter", 'featured')    
    const presenterDTOs = presenters.map(transformToPresenterDTO)
    return NextResponse.json(presenterDTOs, {
        headers: {
            'Cache-Control': 'public, s-maxage=100, stale-while-revalidate=59'

        }
    })
}