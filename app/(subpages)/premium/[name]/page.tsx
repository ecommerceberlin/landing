import { PremiumList } from "@/components/sections/premium/premium-list"
import { PremiumItem } from "@/components/sections/premium/premium-item"
import { items } from "@/settings/premium"
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title"


export default async function PagePremium({params}: {params: {name: string}}) {

    const name = (await params).name
    return (
        <div>
            <PremiumItem label={name} media={items.find(item => item.label === name)?.media || []} />


            
        </div>
    )
  }