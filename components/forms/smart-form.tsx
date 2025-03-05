'use client'
import {cloneElement} from 'react'
import { cn } from "@/lib/utils"
import { Form } from "@/components/ui/form"
import { useForm, EnhancedUseFormReturn } from "@/hooks/use-form"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { SubmitButton } from "@/components/forms/components/submit-button"

import { 
  FormSchemaDefinitions, 
  SchemaDefinition, 
} from '@/lib/schemas'
import * as z from 'zod'
import { NavigationalButtons } from "./components/navigational-buttons"
import { Summary } from "./components/summary"
import { FormProgressBar } from "./components/form-progress-bar"
import { PhoneWithPrefixInput } from "./components/phone-with-prefix-input"
import { SelectInput } from "./components/select-input"
import { TextInput } from "./components/text-input"
import { SwitchInput } from "./components/switch-input"
import { TextareaInput } from "./components/textarea-input"
import { longTextFields } from "@/lib/schemas"
import { updateProfile } from "@/app/actions/register"


interface SmartFormProps {
  schema: FormSchemaDefinitions
  // onSubmit: (values: Record<string, any>) => Promise<any>
  initialData?: Record<string, any>,
  onSuccess?: React.ReactElement
}

export type InputProps = {
  name: string
  className?: string
  optional?: boolean
}

type FormValues = Record<string, any>

export function SmartForm({
  schema,
  initialData,
  onSuccess
}: SmartFormProps) {
  const form = useForm(schema, initialData, {
    mode: 'onChange',  // Validate on every change
  }) as EnhancedUseFormReturn


  const currentFieldIndex = useFormNavigation(state => state.currentFieldIndex)
  const inSummaryMode = useFormNavigation(state => state.inSummaryMode)
  const fields = useFormNavigation(state => state.fields)
  const fieldTypes = useFormNavigation(state => state.fieldTypes)

  const renderFormControl = (name: string) => {

    const type = fieldTypes[name]
    const zodSchema = form.enhancedSchema[name]

    console.log("renderFormControl",{name, type, zodSchema})

    const maxLength = zodSchema instanceof z.ZodString ? zodSchema._def.checks?.find(check => check.kind === 'max')?.value : undefined

    if (type === 'SELECT') {
      return <SelectInput optional={zodSchema.isOptional()} name={name} />
    }
    if(type === 'ACCEPT' || type === 'SWITCH'){     
      return <SwitchInput optional={zodSchema.isOptional()} name={name} />
    }
    if (type === 'PHONE') {
      return <PhoneWithPrefixInput optional={zodSchema.isOptional()} name={name}   />
    }
    if (maxLength && maxLength > 255 || (longTextFields as string[]).includes(name)) {
      return <TextareaInput optional={zodSchema.isOptional()} name={name} />
    }
    return (
      <TextInput optional={zodSchema.isOptional()} name={name}   />
    )
  }

  const handleFormSubmit = async (values: FormValues, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault()

   
    // if (!form.formState.isValid) {
    //   console.log('Form is invalid:', form.formState.errors)
    //   return
    // }

    try {
      console.log({values})
      const result = await updateProfile(values)

      if (result?.success) {
        if (onSuccess) {
          return cloneElement(onSuccess, {data: result.data})
        }
        // form.reset(initialData)
        // push(`/qrcode/${result?.data?.code}`)
        return
      }else{
        // Handle server validation errors
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
    }
  }



  return (
    <Form {...form} key="your-form-key">
      <form 
        onSubmit={form.handleSubmit(handleFormSubmit)} 
        className={cn(
          "w-full px-2 md:max-w-[600px]",
          "flex items-center md:items-start justify-center md:justify-start",
         
        )}
      >
        
        <div className="w-full flex flex-col">
          <FormProgressBar className="md:hidden" />
          {inSummaryMode ? (
            <Summary className="md:hidden" />
          ) : (
            <div className="relative mt-[2rem] pb-[140px] md:pb-0 md:static">
              { fields.map((fieldName, index) =>  (
                  <div
                    key={fieldName}
                    className={cn(
                      "absolute inset-0",
                      "transition-all duration-500 ease-in-out",
                      // Mobile behavior (default)
                      currentFieldIndex === index
                        ? 'opacity-100 translate-x-0 min-h-fit pointer-events-auto md:translate-x-0'
                        : index < currentFieldIndex
                          ? 'opacity-0 -translate-x-full pointer-events-none md:translate-x-0' // Slide left if previous
                          : 'opacity-0 translate-x-full pointer-events-none md:translate-x-0',  // Slide right if next
                      // Desktop behavior
                      'md:relative md:opacity-100 md:pointer-events-auto md:mb-4'
                    )}
                  >
                    <div className="relative">
                      {renderFormControl(fieldName)}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          <div className="w-full">
            <NavigationalButtons className="md:hidden" />
            <SubmitButton className="hidden md:block" />
          </div>
        </div>
   
      </form>
    </Form>
  )
} 