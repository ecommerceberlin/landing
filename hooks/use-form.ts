import {
  FormSchemaDefinitions, 
  SchemaDefinition, 
  commonValidators, 
  extractDefaults,
  combineSchema,
  enhanceSchema
 } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useFormHook, UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { useEffect, useMemo } from "react"
import { useFormNavigation } from "@/hooks/use-form-navigation"


export interface EnhancedUseFormReturn<TFieldValues extends Record<string, any> = any> extends UseFormReturn<TFieldValues> {
  enhancedSchema: Record<string, z.ZodTypeAny>
}

export const useForm = (schema: FormSchemaDefinitions, initialData?: Record<string, any>, options: Record<string, any> = {
   mode: "onChange"
}) => {

  const setFieldsFromSchema = useFormNavigation(state => state.setFieldsFromSchema)
  const setInitialData = useFormNavigation(state => state.setInitialData)
  
  const combinedSchema = combineSchema(schema)
  const enhancedSchema = enhanceSchema(combinedSchema)
  
  const defaultValues = {
    ...extractDefaults(z.object(commonValidators)),
    ...extractDefaults(combinedSchema),
    ...(initialData ?? {}) 
  }

  console.log({defaultValues})

  useEffect(() => {
    setFieldsFromSchema(schema), //custom! ...only type, description and labels are guaranteed...
    setInitialData(defaultValues)
  }, []) // Run only once on mount

  const form = useFormHook({
    resolver: zodResolver(enhancedSchema),
    defaultValues,
    ...options
  })

   // Extend form with enhanced schema - use schemaWithCommonValidators.shape instead of combinedSchema.shape
   return Object.assign(form, {
    enhancedSchema: enhancedSchema.shape,
  }) as EnhancedUseFormReturn
}