import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import type { InputProps } from "../smart-form"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { t } from "@/scripts/translate"

export const SelectInput: React.FC<InputProps> = ({ name, className, optional }) => {
  
  const form = useFormContext()
  const setPreventAutoAdvance = useFormNavigation(state => state.setPreventAutoAdvance)
  const autoAdvanceIfValid = useFormNavigation(state => state.autoAdvanceIfValid)
  const labels = useFormNavigation(state => state.fieldLabels[name])

  const handleValueChange = async (value: string) => {
    form.setValue(name, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setPreventAutoAdvance(false)
    console.log('Select value changed:', { name, value })

    const isValid = await form.trigger(name)
    if (isValid){
      autoAdvanceIfValid()
    }
  }

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
            // form.formState.errors[name] && "text-[#FCE61D]"
          )}>
            {t(`fields.${name}.label`)}
            {!optional && <span className="ml-1">*</span>}
          </FormLabel>
        </div>
        <FormControl>
        <Select 
        onValueChange={handleValueChange} 
        value={field.value}
      >
        <SelectTrigger className={cn(className, "w-full bg-white/80")}>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {(labels || []).map(({value, label}) => (
            <SelectItem key={value} value={value}>
              {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        </FormControl>
        <div className="flex justify-center md:justify-start w-full">
          <FormMessage  />
        </div>
        </FormItem>

      )} />
   
    </div>
  )
}
