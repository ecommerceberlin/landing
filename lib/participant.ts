import type { Json, Participant, JsonObject, ParticipantRole } from "@/db/kysely-types"

export const getParticipantData = (key: string, participant: Participant) => {

    const searchableData = participant.searchable_data as Json

    if (typeof searchableData === 'object' && searchableData !== null && key in searchableData) {
        return (searchableData as JsonObject)[key]
    }

    return null
}

export const getParticipantRoles = (participant: Participant) => {
    return Array.isArray(participant.roles) ? participant.roles as ParticipantRole[] : []
}
