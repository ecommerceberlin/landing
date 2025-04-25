import { z } from "zod"
import { isValidPhoneNumber } from 'libphonenumber-js'
import { t } from "@/scripts/translate"
import { blockedEmailDomains } from "@/settings/app_rules"

export type ZodSelectOptions = Record<string, string>
  
export const getKeys = (obj: ZodSelectOptions) => Object.keys(obj) as [keyof typeof obj, ...Array<keyof typeof obj>]

export type SchemaDefinitionFieldType = "SWITCH" | "ACCEPT" | "TEXT" | "LONGTEXT" | "NUMBER" | "SELECT" | "PHONE" | "EMAIL"

export type SchemaDefinition = {
    type: SchemaDefinitionFieldType
    schema?: z.ZodType | z.ZodTypeAny | null
    description: string
    labels?: ZodSelectOptions
}

export type FormSchemaDefinitions = Record<string, SchemaDefinition>


export const longTextFields = []

export const commonValidators = {
  email: z.string({
    required_error: t("fields.email.error"),
  }).email( t("fields.email.error") ).refine((val) => {

    if(!blockedEmailDomains || !Array.isArray(blockedEmailDomains)) return true

    return !blockedEmailDomains.some(domain => val.endsWith(domain))
  }, {
    message: t("fields.email.bad_email_domain_error"),
    path: []
  }),
  cname: z.string({
    required_error: t("fields.cname.error"),
  }).min(2, t("fields.cname.error")).max(255),
  cname2: z.string({
    required_error: t("fields.cname2.error"),
  }).min(2, t("fields.cname2.error")).max(255),
  position: z.string({
    required_error: t("fields.position.error"),
  }).min(2, t("fields.position.error")).max(255),
  fname: z.string({
    required_error: t("fields.fname.error"),
  }).min(2, t("fields.fname.error")).max(255),
  lname: z.string({
    required_error: t("fields.lname.error"),
  }).min(2, t("fields.lname.error")).max(255),
  name: z.string({
    required_error: t("fields.name.error"),
  }).min(2, t("fields.name.error")).max(255),
  company_website: z.string({
    required_error: t("fields.company_website.error"),
  }).max(255),
  phone: z.object({
    countryCode: z.string().min(1, t("fields.phone.error")),
    number: z.string().min(1, t("fields.phone.error"))
  }).refine((data) => {
    try {
      return isValidPhoneNumber(`${data.countryCode}${data.number}`)
    } catch {
      return false
    }
  }, {
    message: t("fields.phone.error"),
    path: ["number"] // This will show error under the number field
  }),
  accept: z.boolean()
    .default(true)
    .superRefine((val, ctx) => {
      if (val !== true) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("fields.accept.error")
        });
      }
    })
}




export const extractDefaults = (schema: z.ZodTypeAny): any => {
  if (schema instanceof z.ZodObject) {
    return Object.fromEntries(
      Object.entries(schema.shape).map(([key, value]) => [
        key, 
        extractDefaults(value as z.ZodTypeAny)
      ])
    );
  } else if (schema instanceof z.ZodArray) {
    try {
      return schema.parse(undefined); // Extract default array values
    } catch {
      return [];
    }
  } else {
    try {
      return schema.parse(undefined);
    } catch {
      return undefined;
    }
  }
};


export const combineSchema = (schema: FormSchemaDefinitions) => {
  return z.object(
    Object.fromEntries(
      Object.entries(schema).map(([key, field]) => [
        key,
        field.schema ?? z.never(),  
      ])
    )
  );
}


export const enhanceSchema = (combinedSchema: z.ZodObject<any>) => {
  
  // Step 2: Merge with commonValidators
  return z.object(
    Object.fromEntries(
      Object.entries(combinedSchema.shape).map(([key, fieldSchema]) => {
        const commonValidator = commonValidators[key as keyof typeof commonValidators];
        
        if (fieldSchema instanceof z.ZodNever) {
          // If field has no schema but has common validator, use that
          // Otherwise fallback to string with max length
          return [key, commonValidator ?? z.string().max(255)];
        }
        
        // Use provided schema
        return [key, fieldSchema];
      })
    )
  );

 
}
  