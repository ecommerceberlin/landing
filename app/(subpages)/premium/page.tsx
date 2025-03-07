import { PremiumList } from "@/components/sections/premium/premium-list"
import { items } from '@/settings/premium'

export const dynamic = 'force-static'
export default function PagePremium() {
    return (
        <div>
           <PremiumList items={items} baseLabel="premium" />
        </div>
    )
  }