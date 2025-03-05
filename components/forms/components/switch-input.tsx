import { Switch } from "@/components/ui/switch"
import { FormItem, FormMessage, FormLabel, FormControl, FormField } from "@/components/ui/form";
import { useFormContext } from "react-hook-form"
import type { InputProps } from "../smart-form"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { t } from "@/scripts/translate"

export const SwitchInput: React.FC<InputProps> = ({ name, optional }) => {
  const form = useFormContext()

  return (
    <div className="w-full max-w-[600px]">
      <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div>
            <FormItem className="flex flex-col items-center md:items-start w-full">
            <div className="flex flex-row items-center gap-2">
                <FormControl>
                    <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    defaultChecked={true}
                    />
                </FormControl>
                <FormLabel className="text-md mb-1">
                    {t(`fields.${name}.label`)}
                    {!optional && <span className="text-destructive ml-1">*</span>}
                </FormLabel>
            </div>
            <FormMessage className="w-full"/>

            </FormItem>
        </div>
      )} />
    </div>
  )
} 
