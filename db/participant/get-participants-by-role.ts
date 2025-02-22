import { db } from "@/db/db"
import { Participant } from "@/db/kysely-types"
import { sql } from "kysely"
import { eventId } from "@/settings/app_rules"

type OrderBy = null | 'featured' | 'name' | 'organization' | 'position';

export async function getParticipantsByRole(
    role: string, 
    orderBy: OrderBy = 'featured'
): Promise<Participant[]> {

  
    let query = db .selectFrom('Participant')
    .selectAll()
    .select([
      sql<string[]>`array_remove(string_to_array(trim(both '{}' from roles::text), ','), '')`.as('roles')
    ])
    .where('event_id', '=', eventId)
    .where(sql`roles::text`, 'ilike', `%${role}%`)
   
    if(orderBy === 'featured'){
      query = query.orderBy(sql`CAST(NULLIF(searchable_data->>'featured', '') AS numeric) DESC NULLS LAST`)
    }

    return (await query.execute()) as unknown as Participant[]
}
