import { useFormNavigation } from "@/hooks/use-form-navigation"

export const FormProgressBar = () => {

  const currentFieldIndex = useFormNavigation(state => state.currentFieldIndex)
  const fields = useFormNavigation(state => state.fields)
  const inSummaryMode = useFormNavigation(state => state.inSummaryMode)


  if (inSummaryMode || !fields.length) return null

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Step {currentFieldIndex + 1} of {fields.length}</span>
        <span>{Math.round(((currentFieldIndex + 1) / fields.length) * 100)}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-in-out rounded-full"
          style={{ width: `${((currentFieldIndex + 1) / fields.length) * 100}%` }}
        />
      </div>
    </div>
  )
} 