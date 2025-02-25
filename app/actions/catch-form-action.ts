"use server"

import { requestACallSchema } from "@/settings/schemas";
import { z } from "zod";
import { getReferer } from "@/app/actions/get-referer";
import { catchFormDataToNewsletter } from "@/db/newsletter/catch-form-data-to-newsletter";


export async function catchFormAction(context: string, formData: FormData) {
    const data = requestACallSchema.parse(formData);
    const referer = await getReferer();

    const newsletter = await catchFormDataToNewsletter({
        context,
        data: {...data, referer},
        organizer_id: 5
    })

    console.log({newsletter})

    return {success: true, id: newsletter?.id}
}