"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { newsletterSchema } from "@/settings/schemas";
import { t } from "@/scripts/translate";
import { catchFormAction } from "@/app/actions/catch-form-action";
import { useState } from "react";

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

export function Newsletter({ baseLabel, className }: RequestACallProps) {

    const { 
        handleSubmit, 
        register,
        formState: { isSubmitting, isSubmitSuccessful, errors },
        control,
        trigger,
        reset
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            accept: true
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data)

        const response = await catchFormAction(baseLabel, data)

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
            <div className="flex flex-row">
                
            <Input {...register("email")} placeholder="your@email.com" className="flex-1 h-11" /> 

                <Button 
                type="submit" 
                className="cursor-pointer w-auto h-11"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : t(`${baseLabel}.button`)}
            </Button>

              
            </div>

            <ErrorMessage error={errors.email} />
            
            <div className="space-y-4 mt-10">
            
           
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