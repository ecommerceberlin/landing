import { SectionSecondaryTitle } from "@/components/text/section-secondary-title"
import { SectionTitle } from "@/components/text/section-title"

export default function AboutTitle() {
  return (
    <div className="space-y-2">
      <SectionTitle label="about.title" />
      <SectionSecondaryTitle label="about.subtitle" />
    </div>
  )
}
