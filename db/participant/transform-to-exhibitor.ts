import { Participant } from "@/db/kysely-types"
import { getParticipantData } from "@/lib/participant"

export type ExhibitorDTO = {
    id: number
    n: string
    a: string
    pr: number
} 

export function transformToExhibitorDTO(participant: Participant): ExhibitorDTO {

    const company = getParticipantData('company', participant) as Record<string, any>

    return {
        id: Number(participant.company_id),
        n: company?.name as string,
        a: company?.logotype_cdn as string,
        pr: Number(company?.promo)
    }
} 