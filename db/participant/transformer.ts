import { Participant } from "@/db/kysely-types"
import { getParticipantData } from "@/lib/participant"

export type PresenterDTO = {
    id: number
    full_name: string
    organization: string
    position: string
    avatar: string
    linkedin: string
    // Add only the fields you want to expose to the client
} 

export function transformToPresenterDTO(participant: Participant): PresenterDTO {
    return {
        id: participant.external_id,
        full_name: getParticipantData('presenter', participant) as string,
        organization: getParticipantData('cname2', participant) as string,
        position: getParticipantData('position', participant) as string,
        avatar: getParticipantData('avatar_cdn', participant) as string,
        linkedin: getParticipantData('profile_linkedin', participant) as string,
        // Map only the fields you want to expose
    }
} 