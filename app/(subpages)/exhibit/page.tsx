
import {redirect} from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function Exhibitors() {

  redirect('https://exhibit.ecommerceberlin.com/exhibit')

  return <div>Exhibitors</div>
}