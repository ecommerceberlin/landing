import { requestACallSchema } from "@/settings/schemas";
import { z } from "zod";
import { getReferer } from "@/app/actions/get-referer";


export async function catchFormAction(formData: FormData) {
    const { name, email, company, phone } = requestACallSchema.parse(formData);
    const referer = await getReferer();
    console.log(referer);
}