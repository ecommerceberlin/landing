'use client'

import { Button } from "@/components/ui/button"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"
import { SubmitButton } from "@/components/forms/components/submit-button"

export const NavigationalButtons = ({className}: {className?: string}) => {

  const form = useFormContext()

  const currentFieldIndex = useFormNavigation(state => state.currentFieldIndex)
  const fields = useFormNavigation(state => state.fields)
  const inSummaryMode = useFormNavigation(state => state.inSummaryMode)
  const fieldTypes = useFormNavigation(state => state.fieldTypes)
  const initialData = useFormNavigation(state => state.initialData)
  const preventAutoAdvance = useFormNavigation(state => state.preventAutoAdvance)
  const setInSummaryMode = useFormNavigation(state => state.setInSummaryMode)
  const nextField = useFormNavigation(state => state.nextField)
  const previousField = useFormNavigation(state => state.previousField)

  const fieldName = fields[currentFieldIndex]
  const type = fieldTypes[fieldName]
  const isBoolean =  type=== 'SWITCH'|| type === 'ACCEPT'
  const {error, invalid, isDirty, isTouched} = form.getFieldState(fieldName)
  
  const fieldValue = form.watch(fieldName)
  // const fieldValue2 = form.getValues(fieldName)

  /**
   * // Boolean can be false
   * // Boolean is always "valid"
   */

  const customIsValid = !error && 
  (isDirty || isTouched || (initialData?.[fieldName] !== undefined) || isBoolean) && (fieldValue !== '' || isBoolean) && invalid===false 


  console.log(`${type} :: ${fieldName} CHECK`, {
    error,
    VALID: invalid===false,
    isDirty,
    isTouched,
    fieldValue,
    // fieldValue2,
    customIsValid,
    isBoolean,
    preventAutoAdvance
  })
  
  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const isValid = await form.trigger(fieldName)
    if (isValid) {
      nextField()
    }
  }
/**
 * 
 * if shit happens 
 
if (currentFieldIndex === fields.length - 1) {
  setInSummaryMode(true)
} else {
  nextField()
}

*/
 

  const handlePrevious = () => {
    if (inSummaryMode) {
      setInSummaryMode(false)
    } else {
      previousField()
    }
  }

  return (
    <div className={cn("flex flex-row gap-2 w-full mt-2 md:mt-4", className)}>
      <Button 
        className="w-1/2 h-16 text-lg"
        type="button" 
        variant="outline"
        onClick={handlePrevious}
        disabled={currentFieldIndex === 0 && !inSummaryMode}
      >
        Previous
      </Button>

      {inSummaryMode ? (
        <SubmitButton />
      ) : currentFieldIndex === fields.length - 1 ? (
        <Button 
          type="button"
          className="w-1/2 h-16 text-lg"
          onClick={handleNext}
        >
          Summary
        </Button>
      ) : (
        <Button 
          type="button" 
          variant="outline"
          onClick={handleNext}
          className="w-1/2 h-16 text-lg"
        >
          Next
        </Button>
      )}
    </div>
  )
}

