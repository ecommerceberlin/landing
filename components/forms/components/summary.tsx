import { Button } from "@/components/ui/button"
import { useFormContext } from "react-hook-form"
import { useFormNavigation } from "@/hooks/use-form-navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { EditIcon } from "lucide-react"

export const Summary = () => {
  const { getValues } = useFormContext()
  const values = getValues()
  const navigateToField = useFormNavigation(state => state.navigateToField)
  const fields = useFormNavigation(state => state.fields)
  const fieldDescriptions = useFormNavigation(state => state.fieldDescriptions)

  const handleNavigate = (fieldName: string) => {
    const fieldIndex = fields.indexOf(fieldName)
    if (fieldIndex !== -1) {
      navigateToField(fieldIndex)
    }
  }

  return (
    <div className="w-full px-2 md:max-w-[600px]">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">Summary</h2>
      <ScrollArea className="h-[200px] max-w-[550px] rounded-md border p-4">
    
        {fields.map((fieldName) => (
          <div key={fieldName} className={cn(
            "py-2 border-b last:border-b-0",
            "flex flex-row gap-1"
          )}>
            <div className="flex-1 flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              {fieldDescriptions?.[fieldName]}
            </span>
            <span className="font-medium">
              {typeof values[fieldName] === 'boolean' 
                ? values[fieldName] ? 'Yes' : 'No'
                : typeof values[fieldName] === 'object'
                  ? `${values[fieldName].countryCode} ${values[fieldName].number}`
                  : values[fieldName]?.toString() || "Not provided"}
            </span>
            </div>
            <div className="w-20 flex flex-col justify-end">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => handleNavigate(fieldName)}
                className="text-blue-600 hover:text-blue-800"
              >
                <EditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
          </div>
        ))}
     
      </ScrollArea>
    </div>
  )
} 