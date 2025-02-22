"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

interface RequestACallProps {
    className?: string
}



export function RequestACall({ className }: RequestACallProps) {

    const { register, handleSubmit } = useForm({
        mode: "onChange",
        resolver: zodResolver(z.object({
            name: z.string().min(1),
            email: z.string().email(),
            phone: z.string().min(10),
            message: z.string().min(10)
        }))
    });

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className={cn("flex-1 p-5", className)}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>Name</Label>
                    <Input placeholder="Name" {...register("name")} />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input placeholder="Email" {...register("email")} />
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input placeholder="Phone" {...register("phone")} />
                </div>
                <div>
                    <Label>Message</Label>
                    <Input placeholder="Message" {...register("message")} />
                </div>
            </div>
            

            <div className="space-y-4 mt-10">
            
            <Button type="submit" className="w-full">BOOK A CALL</Button>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>

            </form>

        </div>
    )
}