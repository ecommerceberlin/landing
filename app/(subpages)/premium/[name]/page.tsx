import { PremiumList } from "@/components/sections/premium-list"
import { Premium } from "@/components/sections/premium"
import { items } from "@/settings/premium"
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title"


export default async function PagePremium({params}: {params: {name: string}}) {

    const name = (await params).name
    return (
        <div>
            <Premium label={name} media={items.find(item => item.label === name)?.media || []} />

            <SectionSecondaryTitle label="premium.see-other.title" className="my-10 md:ml-[25vw]" />

            <PremiumList items={items} excludeLabel={name} baseLabel="premium" />
        </div>
    )
  }