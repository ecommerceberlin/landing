
import { BoxWithHorizontalItems } from "@/components/containers/box-horizontal"
import { RoleButton } from "@/components/nav/rolebutton"
import { RequestACall } from "@/components/forms/request-a-call"

export default function PremiumRelated() {
    return (
       
      <BoxWithHorizontalItems className="bg-ebe">
      <RoleButton baseLabel="premium.book-a-call" />
      <RequestACall baseLabel="premium.book-a-call" />
     </BoxWithHorizontalItems>
    )
}