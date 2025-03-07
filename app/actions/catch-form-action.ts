"use server"

import { requestACallSchema, newsletterSchema } from "@/settings/schemas";
import { z } from "zod";
import { getReferer } from "@/app/actions/get-referer";
import { catchFormDataToNewsletter } from "@/db/newsletter/catch-form-data-to-newsletter";
import { fireAndForget } from "@/lib/fire-and-forget";
import { mapContextToSlackWebhook } from "@/settings/notifications";
import { getWebhookByName } from "@/db/notifications/get-webhooks";
import { formatObject } from "@/lib/utils";

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
        organizer_id: 5
    })

    // Create a new object without the accept property
    const { accept, ...dataWithoutAccept } = data;

    const webhook = await(getWebhookByName(mapContextToSlackWebhook(context)))

    if (webhook?.webhook) {
        fireAndForget(webhook.webhook, {
            text: formatObject({context, ...dataWithoutAccept, referer })
        })
    }

    return {success: true, id: newsletter?.id}
}