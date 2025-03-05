import { FormSchemaDefinitions } from "@/lib/schemas"
import {Skeleton} from "@/components/ui/skeleton"

interface SmartFormLoadingProps {
    schema: FormSchemaDefinitions
}
export function SmartFormLoading({schema}: SmartFormLoadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>{Object.keys(schema).map((key) => {
        return <Skeleton key={key} className="h-[40px] w-full" />
      })}</div>
    </div>
  )
}