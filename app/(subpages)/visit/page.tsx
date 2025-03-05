import { Suspense } from "react"
import { SmartForm } from "@/components/forms/smart-form"
import { visitorRegistrationSchema } from "@/settings/visitorRegistrationSchema"
import { Success } from "@/components/forms/success"

export default function VisitorRegistrationPage() {
  return (<div className="md:ml-[25vw]">
    <Suspense fallback={<div>Loading...</div>}>
    <SmartForm schema={visitorRegistrationSchema} onSuccess={<Success />} />
    </Suspense></div>)
}