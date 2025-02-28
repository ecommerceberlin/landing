
import { SmartForm } from "@/components/forms/smart-form"
import { visitorRegistrationSchema } from "@/settings/visitorRegistrationSchema"

export default function VisitorRegistrationPage() {
  return <div className="md:ml-[25vw]"><SmartForm schema={visitorRegistrationSchema} /></div>
}