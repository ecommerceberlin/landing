import { z } from "zod";
import {t} from '@/scripts/translate'



export const requestACallSchema = z.object({
    name: z.string()
        .min(3, { message: t('fields.full_name.error') })
        .max(100, { message: t('fields.full_name.error') }),
    email: z.string()
        .email({ message: t('fields.email.error') })
        .min(3, { message: t('fields.email.error') })
        .max(100, { message: t('fields.email.error') }),
    company: z.string()
        .min(3, { message: t('fields.company.error') })
        .max(100, { message: t('fields.company.error') }),
    phone: z.string()
        .min(7, { message: t('fields.phone.error') })
        .max(20, { message: t('fields.phone.error') }),
    accept: z.boolean().refine((data) => data === true, { message: t('fields.accept.error') })
})


export const joinNewsletterSchema = z.object({
    email: z.string()
        .email({ message: t('fields.email.error') })
        .min(3, { message: t('fields.email.error') })
        .max(100, { message: t('fields.email.error') }),
})