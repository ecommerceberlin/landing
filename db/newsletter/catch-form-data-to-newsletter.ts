import { db } from "@/db/db"
import { Newsletter, Json } from "@/db/kysely-types"


type CreateNewsletterInput = {
    context: string
    data: Json
    organizer_id: number
}

export async function catchFormDataToNewsletter(input: CreateNewsletterInput): Promise<Newsletter> {
    const result = await db
        .insertInto('Newsletter')
        .values({
            context: input.context,
            data: input.data,
            organizer_id: input.organizer_id,
        })
        .returningAll()
        .executeTakeFirst()

    if (!result) throw new Error('Failed to create newsletter')
    return result as unknown as Newsletter
} 