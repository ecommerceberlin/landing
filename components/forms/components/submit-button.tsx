"use client"

import { Button } from "@/components/ui/button"
import { useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"
import { t } from "@/scripts/translate"
export const SubmitButton = ({className}: {className?: string}) => {
    const form = useFormContext()
    return (
        <Button 
        type="submit"
        className={cn("w-1/2 h-16 text-lg cursor-pointer", className)}
        disabled={!form.formState.isValid}
      >
      {t(`common.submit`)}
      </Button>
    )
}