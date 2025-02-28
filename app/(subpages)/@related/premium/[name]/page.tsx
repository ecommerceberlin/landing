
import { BoxWithHorizontalItems } from "@/components/containers/box-horizontal"
import { RoleButton } from "@/components/nav/rolebutton"
import { RequestACall } from "@/components/forms/request-a-call"
import {items} from '@/settings/premium'
import { PremiumList } from "@/components/sections/premium/premium-list"
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title"


export default async function PremiumRelated({params}: {params: {name: string}}) {
    
  const name = (await params).name
    return ( 
      
      <div>
      <BoxWithHorizontalItems className="bg-ebe">
      <RoleButton baseLabel="premium.book-a-call" />
      <RequestACall baseLabel="premium.book-a-call" context={`premium.${name}`} />
      </BoxWithHorizontalItems>

      <SectionSecondaryTitle label="premium.see-other.title" className="my-10 md:ml-[25vw]" />

      <PremiumList items={items} baseLabel="premium" excludeLabel={name} />
      </div>
    )
}