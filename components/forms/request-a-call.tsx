"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { requestACallSchema } from "@/settings/schemas";
import { t } from "@/scripts/translate";
import { catchFormAction } from "@/app/actions/catch-form-action";
import { useState } from "react";

interface RequestACallProps {
    baseLabel: string
    className?: string
    context?: string
}

const ErrorMessage = ({error}: {error: any}) => {

    if(!error) return null

    return (
        <p className="text-sm text-black/70 mt-1">{error.message}</p>
    )
}

export function RequestACall({ baseLabel, className, context }: RequestACallProps) {

    const { 
        handleSubmit, 
        register,
        formState: { isSubmitting, isSubmitSuccessful, errors },
        control,
        trigger,
        reset
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(requestACallSchema),
        defaultValues: {
            accept: true
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data)

        const response = await catchFormAction(context || baseLabel, data)

        if(response.success) {
            console.log("Form submitted successfully")
            reset()
        } else {
            console.log("Form submission failed")
        }
    }

    return (
        <div className={cn("flex-1 p-5 w-full", className)}>


            {isSubmitSuccessful && (
                <div className="text-center text-[2rem] my-4 font-medium">
                {t(`form.status.success`)}
                </div>
            )}


            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            
            <Button 
                type="submit" 
                className="w-full cursor-pointer"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : t(`${baseLabel}.button`)}
            </Button>
            <div className="flex flex-row items-center gap-2">
            <Controller
                name="accept"
                control={control}
                render={({ field }) => (
                    <Checkbox 
                        checked={field.value}
                        defaultChecked={true}
                        onCheckedChange={(checked) => {
                            field.onChange(checked);
                            trigger("accept"); 
                        }}
                    />
                )}
                />
                <p className="text-md font-light">{t(`${baseLabel}.terms`)}</p>
            </div>
            <ErrorMessage error={errors.accept} />
            </div>

            
            </form>

        </div>
    )
}