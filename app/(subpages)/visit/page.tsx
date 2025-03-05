import { Suspense } from "react"
import { SmartForm } from "@/components/forms/smart-form"
import { visitorRegistrationSchema } from "@/settings/visitorRegistrationSchema"
import { Success } from "@/components/forms/success"
import { SmartFormLoading } from "@/components/forms/smart-form-loading"

export const dynamic = 'force-static'


export default function VisitorRegistrationPage() {
  return (<div className="md:ml-[25vw]">
    <Suspense fallback={<SmartFormLoading schema={visitorRegistrationSchema} />}>
    <SmartForm schema={visitorRegistrationSchema} onSuccess={<Success />} />
    </Suspense></div>)
}