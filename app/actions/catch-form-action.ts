import { requestACallSchema } from "@/settings/schemas";
import { z } from "zod";

export async function catchFormAction(formData: FormData) {
    const { name, email, company, phone } = requestACallSchema.parse(formData);
}