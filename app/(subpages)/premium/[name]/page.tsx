import { PremiumList } from "@/components/sections/premium-list"
import { Premium } from "@/components/sections/premium"


export default async function PagePremium({params}: {params: {name: string}}) {

    const name = (await params).name
    return (
        <div>
            <Premium name={params.name} />
           <PremiumList />
        </div>
    )
  }