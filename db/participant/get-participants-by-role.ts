import { db } from "@/db/db"
import { Participant } from "@/db/kysely-types"
import { sql } from "kysely"
import { eventId } from "@/settings/app_rules"

export async function getParticipantsByRole(
    role: string, 
    orderByFeatured: boolean = false
): Promise<Participant[]> {
    return (await db
      .selectFrom('Participant')
      .selectAll()
      .select([
        sql<string[]>`array_remove(string_to_array(trim(both '{}' from roles::text), ','), '')`.as('roles')
      ])
      .where('event_id', '=', eventId)
      .where(sql`roles::text`, 'ilike', `%${role}%`)
      .orderBy((eb) => 
        orderByFeatured 
          ? sql`CAST(NULLIF(searchable_data->>'featured', '') AS numeric) DESC NULLS LAST`
          : sql`1`
      )
      .execute()) as unknown as Participant[]
}
