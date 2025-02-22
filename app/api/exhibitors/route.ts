import { NextRequest, NextResponse } from "next/server"
import { getParticipantsByRole } from "@/db/participant/get-participants-by-role"
import { transformToExhibitorDTO } from "@/db/participant/transform-to-exhibitor"
import { uniqueItems } from "@/lib/utils"

export const revalidate = 600
export const runtime = 'edge' // Enable edge runtime

export async function GET(request: NextRequest) {
    const exhibitors = await getParticipantsByRole("exhibitor", undefined)    
    const exhibitorDTOs = exhibitors.map(transformToExhibitorDTO)
    const uniqueExhibitors = uniqueItems(exhibitorDTOs, "id")

    return NextResponse.json(uniqueExhibitors, {
        headers: {
            'Cache-Control': 'public, s-maxage=100, stale-while-revalidate=59'
        }
    })
}