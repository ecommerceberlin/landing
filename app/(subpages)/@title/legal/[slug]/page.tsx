
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title"

export default async function LegalTitle({params}: {params: {slug: string}}) {

    const slug = (await params).slug;

    return <SectionSecondaryTitle label={`legal.${slug}`} />
}