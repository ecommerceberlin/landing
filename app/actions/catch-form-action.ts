"use server"

import { requestACallSchema, newsletterSchema } from "@/settings/schemas";
import { z } from "zod";
import { getReferer } from "@/app/actions/get-referer";
import { catchFormDataToNewsletter } from "@/db/newsletter/catch-form-data-to-newsletter";
import { publishToQueue } from "@/lib/qstash";
import { baseUrl, organizerId } from "@/settings/app_rules";

export async function catchFormAction(context: string, formData: FormData) {

    let schema: z.ZodSchema<any> = requestACallSchema

    if(context.startsWith('newsletter')){
        schema = newsletterSchema
    }

    const data = schema.parse(formData);
    const referer = await getReferer();

    const newsletter = await catchFormDataToNewsletter({
        context,
        data: {...data, referer},
        organizer_id: organizerId
    })

    const { accept, ...dataWithoutAccept } = data;

    await publishToQueue({
        url: `${baseUrl}/api/queue-workers/slack`,
        data: {
            context,
            ...dataWithoutAccept,
            referer
        },
        retries: 2,
        deduplicationId: `slack-${newsletter?.id}`,
    });
    

    return {success: true, id: newsletter?.id}
}