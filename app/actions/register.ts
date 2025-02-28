'use server'

import { z } from "zod"
import { visitorRegistrationSchema } from "@/settings/visitorRegistrationSchema"
import { combineSchema, enhanceSchema } from "@/lib/schemas"
import { visitorTicketId } from "@/settings/app_rules"
const combinedSchema = combineSchema(visitorRegistrationSchema)
const enhancedSchema = enhanceSchema(combinedSchema)

export async function updateProfile(values: z.infer<typeof enhancedSchema>) {
  try {
    // Validate the data server-side
    // const validatedData = await enhancedSchema.parseAsync(values)

    const res = await fetch(`${process.env.API_READONLY_URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        "fields": {
          ...values,
           "phone": `+${values?.phone?.countryCode??""}${values?.phone?.number??""}`
        },
        "tickets": {
          [visitorTicketId]: {
            "quantity": 1,
            "formdata": {}
          }
        },
        "token": null,
        "role": "visitor",
        "report": "",
        "template": "ecommerceberlin-visitor-registration",
        "locale": "en",
        "cc": "",
        "bcc": ""
      })
    })

    const data = await res.json()
    
    //{"data":{"token":"cf109148fcbc17070bef654cabdab9d54c1d7f68","code":"krpweg"}}
    
    return { success: true, data: data?.data }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors }
    }
    return { error: "Failed to update profile" }
  }
} 

/*

OLD SYSTEM

{
    "fields": {
        "url": "https://ecommerceberlin.com/visit",
        "locale": "en",
        "email": "adam@zygadlewicz.com",
        "fname": "adam",
        "lname": "zygadlewicz",
        "cname2": "test",
        "position": "test",
        "phone": "100200300",
        "participant_type": "media",
        "company_role": "c_level",
        "location": "no",
        "objective": "solutions",
        "business_model": "d2c_model",
        "employee": "21_100_ppl",
        "accept": true
    },
    "tickets": {
        "2783": {
            "quantity": 1,
            "formdata": {}
        }
    },
    "token": null,
    "role": "visitor",
    "report": "",
    "template": "ecommerceberlin-visitor-registration",
    "locale": "en",
    "cc": "",
    "bcc": ""
}

*/


/*
{
    "values": {
        "email": "adam@zygadlewicz.com",
        "fname": "adam",
        "lname": "zygadlewicz",
        "cname2": "test",
        "position": "test",
        "phone": {
            "countryCode": "+49",
            "number": "100200300"
        },
        "participant_type": "brand_manufacturer",
        "company_role": "manager",
        "objective": "conference",
        "business_model": "b2c_model",
        "employee": "21_100_ppl",
        "revenue": "5_50_revenue",
        "location": true,
        "accept": true
    }
}

*/