import { Participant } from "@/db/kysely-types"
import { getParticipantData } from "@/lib/participant"

export type PresenterDTO = {
    id: number
    n: string
    c: string
    p: string
    a: string
    l: string
    // Add only the fields you want to expose to the client
} 

export function transformToPresenterDTO(participant: Participant): PresenterDTO {
    return {
        id: participant.external_id,
        n: getParticipantData('presenter', participant) as string,
        c: getParticipantData('cname2', participant) as string,
        p: getParticipantData('position', participant) as string,
        a: getParticipantData('avatar_cdn', participant) as string,
        l: getParticipantData('profile_linkedin', participant) as string,
        // Map only the fields you want to expose
    }
} 