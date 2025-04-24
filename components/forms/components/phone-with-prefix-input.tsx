import { Button } from "@/components/ui/button"
import { FormField, FormMessage, FormLabel, FormItem } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { getSortedCountries, howmanyPrimaryPrefixes } from "@/lib/country-prefixes"
import { Input } from "../../ui/input"
import { ChevronsUpDown } from "lucide-react"
import { useFormContext } from "react-hook-form"
import type { InputProps } from "../smart-form"
import { useState } from "react"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { t } from "@/scripts/translate"

export function PhoneWithPrefixInput({ name, optional }: InputProps) {
    const form = useFormContext()
    const [open, setOpen] = useState(false)
    const nextField = useFormNavigation(state => state.nextField)

    
    // Validate entire phone object
    const validatePhoneObject = () => {
        form.trigger(name) // Trigger validation for the entire phone object
    }

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
        <FormItem className="w-full space-y-2 mb-5">
            <div className="w-full flex justify-center md:justify-start">
                <FormLabel className="text-md mb-1">
                    {t(`fields.${name}.label`)}
                    {!optional && <span className="text-[#FCE61D] ml-1">*</span>}
                </FormLabel>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
                <FormField
                    control={form.control}
                    name={`${name}.countryCode`}
                    render={({ field: countryField }) => (
                        <div className="flex flex-col gap-1 w-full md:max-w-[40%] min-w-[200px]">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className="w-full justify-between"
                                        type="button"
                                    >
                                        {countryField.value
                                            ? countryField.value
                                            : "Select prefix..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command
                                        loop
                                        filter={(value, search) => {
                                            if (value.toLowerCase().includes(search.toLowerCase())) return 1
                                            return 0
                                        }}
                                    >
                                        <CommandInput 
                                            placeholder="Search country..." 
                                            className="h-9"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Tab') {
                                                    e.preventDefault()
                                                    const commandGroup = e.currentTarget.closest('[cmdk-root]')
                                                        ?.querySelector('[cmdk-group]')
                                                    const firstItem = commandGroup
                                                        ?.querySelector('[cmdk-item]:not([aria-hidden="true"])')
                                                    
                                                    if (firstItem instanceof HTMLElement) {
                                                        firstItem.click()
                                                        firstItem.focus()
                                                    }
                                                }
                                            }}
                                        />
                                        <CommandList>
                                            <CommandEmpty>No country found.</CommandEmpty>
                                            <CommandGroup>
                                                {getSortedCountries().map(([code, { en, prefix }], index) => (
                                                    <CommandItem
                                                        key={code}
                                                        value={en}
                                                        onSelect={() => {
                                                            countryField.onChange(prefix)
                                                            setOpen(false)
                                                            validatePhoneObject() // Validate on prefix selection
                                                        }}
                                                        className={cn(
                                                            "rounded-none",
                                                            index+1 === howmanyPrimaryPrefixes ? "border-b-2 border-[#666666]" : ""
                                                        )}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                countryField.value === prefix ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {en} ({prefix})
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`${name}.number`}
                    render={({ field }) => (
                        <div className="flex-1">
                            <Input 
                                {...field}
                                value={field.value || ''}
                                onBlur={() => {
                                    field.onBlur()
                                    validatePhoneObject() // Validate on blur
                                }}
                                onChange={(e) => {
                                    field.onChange(e.target.value)
                                    validatePhoneObject() // Validate on change
                                }}
                                onKeyDown={(e) => handleKeyDown(e)}
                            />
                            <FormMessage />
                        </div>
                    )}
                />
            </div>
        </FormItem>
    )
}

