import { db } from "@/db/db";
import { organizerId } from "@/settings/app_rules";
import { Notification} from '@/db/kysely-types'

export async function getWebhookByName(
    name: string, 
): Promise<Notification> {

    if(!name) throw new Error('Name is required')

    return await db.selectFrom('Notification')
    .selectAll()
    .where('organizer_id', '=', organizerId)
    .where('name', '=', name)
    .executeTakeFirst() as unknown as Notification
}
