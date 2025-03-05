import { FormItem, FormLabel, FormMessage, FormControl, FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import type { InputProps } from "../smart-form"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { t } from "@/scripts/translate"

export const TextareaInput = ({ name, className, optional }: InputProps) => {

  const form = useFormContext()

  return (
    <div className="w-full max-w-[600px]">
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start">
        <div className="w-full flex justify-center md:justify-start">
          <FormLabel className={cn(
            "text-md mb-1",
            "data-[error=true]:text-[#222222]"
          )}>
            {t(`fields.${name}.label`)}
            {!optional && <span className="ml-1">*</span>}
          </FormLabel>
        </div>
        <FormControl>      
        <Textarea
        {...field}
        value={field.value || ""}
        autoComplete="off"
        className={cn(className, "w-full")}
        />
        </FormControl>
        <div className="flex justify-center md:justify-start w-full">
          <FormMessage />
        </div>
        </FormItem>
    )} />
    </div>
  )
}