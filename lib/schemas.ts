import { z } from "zod"
import { isValidPhoneNumber } from 'libphonenumber-js'
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
    required_error: "Email is required",
  }).email("Invalid email address"),
  cname: z.string({
    required_error: "Company name is required",
  }).min(2, "Company name is required").max(255),
  cname2: z.string({
    required_error: "Company name is required",
  }).min(2, "Company name is required").max(255),
  position: z.string({
    required_error: "Position is required",
  }).min(2, "Position is required").max(255),
  fname: z.string({
    required_error: "First name is required",
  }).min(2, "First name is required").max(255),
  lname: z.string({
    required_error: "Last name is required",
  }).min(2, "Last name is required").max(255),
  name: z.string({
    required_error: "Name is required",
  }).min(2, "Name is required").max(255),
  company_website: z.string({
    required_error: "Company website is required",
  }).max(255),
  phone: z.object({
    countryCode: z.string().min(1, "Country code is required"),
    number: z.string().min(1, "Phone number is required")
  }).refine((data) => {
    try {
      return isValidPhoneNumber(`${data.countryCode}${data.number}`)
    } catch {
      return false
    }
  }, {
    message: "Invalid phone number for selected country",
    path: ["number"] // This will show error under the number field
  }),
  accept: z.boolean()
    .default(true)
    .superRefine((val, ctx) => {
      if (val !== true) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "You must accept the terms"
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
  