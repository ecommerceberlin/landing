"use client"

import { z } from "zod"
import { ZodSelectOptions, getKeys, FormSchemaDefinitions } from "@/lib/schemas"

export const participantTypes: ZodSelectOptions  = {
    retailer_wholesaler: "Retailer/Wholesaler",  
    brand_manufacturer: "Brand/Manufacturer",
    service_provider: "Service Provider",
    consultant: "Consultant",
    developer: "Developer",
    media: "Media",
    student: "Student",
} as const

export const companyRoles: ZodSelectOptions = {
    student: "Student",
    entry: "Entry",
    manager: "Manager",
    professional: "Professional",
    head_of_department: "Head of Department",
    director: "Director",
    c_level: "C-Level",
    board_member: "Board Member",
    other: "Other",
} as const

const objective: ZodSelectOptions = {
    solutions: "Solutions",
    conference: "Conference",
    networking: "Networking",
} as const

const businessModel: ZodSelectOptions = {
    b2b_model: "B2B Model",
    b2c_model: "B2C Model",
    d2c_model: "D2C Model",
    wholesale: "Wholesale",
    other_model: "Other Model",
} as const

const employee: ZodSelectOptions = {
    "1_20_ppl": "1-20 People",
    "21_100_ppl": "21-100 People",
    "101_500_ppl": "101-500 People",
    "501_ppl": "501+ People",
} as const

const revenue: ZodSelectOptions = {
    "0_5_revenue": "0-5M EUR Revenue",
    "5_50_revenue": "5-50M EUR Revenue",
    "50_revenue": ">50M EUR Revenue",
} as const

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
        schema: z.enum(getKeys(participantTypes), {
            required_error: "Please select a participant type.",
            invalid_type_error: "Invalid participant type",
            description: "User role"
        }),
        //.default(getKeys(participantTypes)[0]),
        description: "How would you describe yourself?",
        labels: participantTypes,
    },

    company_role: {
        type: "SELECT",
        schema: z.enum(getKeys(companyRoles), {
            description: "Company role",
        }),
        description: "What's your job level?",
        labels: companyRoles,
    },

    objective: {
        type: "SELECT",
        schema: z.enum(getKeys(objective), {
            description: "Objective",
        }),
        description: "What's your main objective for attending?",
        labels: objective,
    },  

    business_model: {
        type: "SELECT",
        schema: z.enum(getKeys(businessModel), {
            description: "Business model",
        }),
        description: "Which business model do you operate?",
        labels: businessModel,
    },

    employee: {
        type: "SELECT",
        schema: z.enum(getKeys(employee), {
            description: "Employee",
        }).optional(),
        description: "How many employees does your company have?",
        labels: employee,
    },  

    revenue: {
        type: "SELECT",
        schema: z.enum(getKeys(revenue), {
            description: "Revenue",
        }).optional(),
        description: "What's your company's revenue?",
        labels: revenue,
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

