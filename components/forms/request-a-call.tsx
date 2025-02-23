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

const ErrorMessage = ({error}: {error: any}) => {

    if(!error) return null

    return (
        <p className="text-sm text-black/70 mt-1">{error.message}</p>
    )
}

export function RequestACall({ className }: RequestACallProps) {

    const { register, handleSubmit, formState: { errors }  } = useForm({
        mode: "onChange",
        resolver: zodResolver(z.object({
            name: z.string().min(3),
            email: z.string().email(),
            company: z.string().min(3),
            phone: z.string().min(10)
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
                    <Input {...register("name")} />
                    <ErrorMessage error={errors.name} />
                </div>
                <div>
                    <Label>Company</Label>
                    <Input {...register("company")} />
                    <ErrorMessage error={errors.company} />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input {...register("email")} />
                    <ErrorMessage error={errors.email} />
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input {...register("phone")} />
                    <ErrorMessage error={errors.phone} />
                </div>
              
            </div>
            

            <div className="space-y-4 mt-10">
            
            <Button type="submit" className="w-full cursor-pointer">BOOK A CALL</Button>
            <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>

            </form>

        </div>
    )
}