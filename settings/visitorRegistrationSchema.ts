"use client"

import { z } from "zod"
import { ZodSelectOptions, FormSchemaDefinitions, translateSelectOptions } from "@/lib/schemas"

export const participantTypes: ZodSelectOptions  = [
    "retailer_wholesaler", 
    "brand_manufacturer",
    "service_provider",
    "consultant",
    "developer",
    "media",
    "student"
 ] as const

export const companyRoles: ZodSelectOptions = [
    "student",
    "entry",
    "manager",
    "professional",
    "head_of_department",
    "director",
    "c_level",
    "board_member",
    "other",
] as const

const objective: ZodSelectOptions = [
    "solutions",
    "conference",
    "networking",
] as const

const businessModel: ZodSelectOptions = [
    "b2b_model",
    "b2c_model",
    "d2c_model",
    "wholesale",
    "other_model",
] as const

const employee: ZodSelectOptions = [
    "1_20_ppl",
    "21_100_ppl",
    "101_500_ppl",
    "501_ppl",
] as const

const revenue: ZodSelectOptions = [
    "0_5_revenue",
    "5_50_revenue",
    "50_revenue",
] as const

export const visitorRegistrationSchema: FormSchemaDefinitions = {

    email: {
        type: "EMAIL",
        schema: null,
        description: "Email",
    },

    fname: {
        type: "TEXT",
        schema: null,
        description: "First Name",
    },

    lname: {
        type: "TEXT",
        schema: null,
        description: "Last Name",
    },

    cname2: {
        type: "TEXT",
        schema: null,
        description: "Company Name",
    },

    position: {
        type: "TEXT",
        schema: null,
        description: "Position in company",
    },

    phone: {
        type: "PHONE",
        schema: null,
        description: "Phone number",
    },

    participant_type: {
        type: "SELECT",
        schema: z.enum(participantTypes, {
            required_error: "Please select a participant type.",
            invalid_type_error: "Invalid participant type",
            description: "User role"
        }),
        //.default(getKeys(participantTypes)[0]),
        description: "How would you describe yourself?",
        labels: translateSelectOptions(participantTypes),
    },

    company_role: {
        type: "SELECT",
        schema: z.enum(companyRoles, {
            description: "Company role",
        }),
        description: "What's your job level?",
        labels: translateSelectOptions(companyRoles),
    },

    objective: {
        type: "SELECT",
        schema: z.enum(objective, {
            description: "Objective",
        }),
        description: "What's your main objective for attending?",
        labels: translateSelectOptions(objective),
    },  

    business_model: {
        type: "SELECT",
        schema: z.enum(businessModel, {
            description: "Business model",
        }),
        description: "Which business model do you operate?",
        labels: translateSelectOptions(businessModel),
    },

    employee: {
        type: "SELECT",
        schema: z.enum(employee, {
            description: "Employee",
        }).optional(),
        description: "How many employees does your company have?",
        labels: translateSelectOptions(employee),
    },  

    revenue: {
        type: "SELECT",
        schema: z.enum(revenue, {
            description: "Revenue",
        }).optional(),
        description: "What's your company's revenue?",
        labels: translateSelectOptions(revenue),
    },    
    
    location: {
        type: "SWITCH",
        schema: z.boolean().default(true),
        description: "Are you Berlin based?",
    },

    accept: {
        type: "ACCEPT",
        schema: null,
        description: "Accept terms and conditions",
    },
    

}

