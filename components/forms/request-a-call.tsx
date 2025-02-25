"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { requestACallSchema } from "@/settings/schemas";
import { t } from "@/scripts/translate";
interface RequestACallProps {
    baseLabel: string
    className?: string
}

const ErrorMessage = ({error}: {error: any}) => {

    if(!error) return null

    return (
        <p className="text-sm text-black/70 mt-1">{error.message}</p>
    )
}

export function RequestACall({ baseLabel, className }: RequestACallProps) {

    const { register, handleSubmit, formState: { errors }  } = useForm({
        mode: "onChange",
        resolver: zodResolver(requestACallSchema)
    });

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className={cn("flex-1 p-5", className)}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>{t(`fields.name.label`)}</Label>
                    <Input {...register("name")} />
                    <ErrorMessage error={errors.name} />
                </div>
                <div>
                    <Label>{t(`fields.company.label`)}</Label>
                    <Input {...register("company")} />
                    <ErrorMessage error={errors.company} />
                </div>
                <div>
                    <Label>{t(`fields.email.label`)}</Label>
                    <Input {...register("email")} />
                    <ErrorMessage error={errors.email} />
                </div>
                <div>
                    <Label>{t(`fields.phone.label`)}</Label>
                    <Input {...register("phone")} />
                    <ErrorMessage error={errors.phone} />
                </div>
              
            </div>
            

            <div className="space-y-4 mt-10">
            
            <Button type="submit" className="w-full cursor-pointer">{t(`${baseLabel}.button`)}</Button>
            <p className="text-md font-light">{t(`${baseLabel}.terms`)}</p>
            </div>

            </form>

        </div>
    )
}