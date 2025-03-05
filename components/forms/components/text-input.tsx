import { FormItem, FormLabel, FormMessage, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import type { InputProps } from "../smart-form"
import { autoCompleteOptions } from "./autocomplete"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { t } from "@/scripts/translate"

export const TextInput = ({ name, className, optional }: InputProps) => {

  const form = useFormContext()
  const nextField = useFormNavigation(state => state.nextField)

//   const { register, setError, clearErrors } = useForm()

//   useEffect(() => {
//   const subscription = watch(name, async (value) => {
//     if (!value) return
    
//     try {
//       const exists = await checkEmailInDB(value)
//       if (exists) {
//         setError("email", {
//           type: "manual",
//           message: "Email already registered"
//         })
//       } else {
//         clearErrors("email")
//       }
//     } catch (error) {
//       console.error("Email validation failed:", error)
//     }
//   }, { debounceTime: 500 }) // Wait 500ms after typing

//   return () => subscription.unsubscribe()
// }, [watch, setError, clearErrors])


  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const isValid = await form.trigger(name)
      if (isValid) {
        nextField()
      }
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
            "data-[error=true]:text-[#222222]"
          )}>
            {t(`fields.${name}.label`)}
            {!optional && <span className="ml-1">*</span>}
          </FormLabel>
        </div>
        <FormControl>
        <Input
        {...field}
        type="text"
        value={field.value || ""}
        autoComplete={Object.keys(autoCompleteOptions).includes(field.name) ? autoCompleteOptions[field.name as keyof typeof autoCompleteOptions] : 'off'
        }
        className={cn(className, "w-full")}
        onKeyDown={(e) => handleKeyDown(e)}
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