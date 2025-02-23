
import { z } from "zod";



export const requestACallSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email().min(3).max(100),
    company: z.string().min(3).max(100),
    phone: z.string().min(10).max(20)
})