"use client"

import { z } from "zod"
import { ZodSelectOptions, FormSchemaDefinitions, translateSelectOptions } from "@/lib/schemas"

export const participantTypes: ZodSelectOptions  = [
    "store_merchant", 
    "brand_manufacturer",
    "retailer_wholesaler",
    "marketplace",
    "service_provider",
    "media",
    "student"
 ] as const

export const visitDepartments: ZodSelectOptions = [
    "ecommerce_management",
    "marketing_communications",
    "operations_logistics",
    "finance_accounting",
    "sales_development",
    "it_software_development",
    "product_merchandising",
    "customer_service",
    "hr_administration",
    "executive_leadership",
] as const;

export const companyRoles: ZodSelectOptions = [
    "student_intern",
    "entry",
    "manager",
    "professional",
    "head_of_department",
    "c_level",
    "board_member",
] as const

// const objective: ZodSelectOptions = [
//     "solutions",
//     "conference",
//     "networking",
// ] as const

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

export const industrySelect: ZodSelectOptions = [
    "service_provider_na",
    "agriculture",
    "automotive",
    "baby_nursery",
    "beauty_pharmaceuticals",
    "diy_garden_tools",
    "education",
    "electronics",
    "fashion_clothing",
    "food_beverages",
    "hobby",
    "home_furniture",
    "jewelry_watches",
    "multi_category_retailer",
    "sport_health_fitness",
    "travel_leisure",
    "other",
] as const;

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

    visit_department: {
        type: "SELECT",
        schema: z.enum(visitDepartments, {
            required_error: "Please select a department type.",
            invalid_type_error: "Invalid department type",
            description: "User role"
        }),
        //.default(getKeys(departmentTypes)[0]),
        description: "How would you describe your role?",
        labels: translateSelectOptions(visitDepartments),
    },    

    company_role: {
        type: "SELECT",
        schema: z.enum(companyRoles, {
            description: "Company role",
        }),
        description: "What's your job level?",
        labels: translateSelectOptions(companyRoles),
    },

    employee: {
        type: "SELECT",
        schema: z.enum(employee, {
            description: "Employee",
        }),
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

    // objective: {
    //     type: "SELECT",
    //     schema: z.enum(objective, {
    //         description: "Objective",
    //     }),
    //     description: "What's your main objective for attending?",
    //     labels: translateSelectOptions(objective),
    // },  

    business_model: {
        type: "SELECT",
        schema: z.enum(businessModel, {
            description: "Business model",
        }).optional(),
        description: "Which business model do you operate?",
        labels: translateSelectOptions(businessModel),
    },
    
    industry_select: {
        type: "SELECT",
        schema: z.enum(industrySelect, {
            required_error: "Please select an industry.",
            invalid_type_error: "Invalid industry selected",
            description: "Industry sector",
        }),
        //.default(getKeys(industrySelect)[0]),
        description: "What is your business sector?",
        labels: translateSelectOptions(industrySelect),
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

