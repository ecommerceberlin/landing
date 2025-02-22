
import { statItems } from "@/settings/stats"

export interface StatItem {
    label: string;
    value: string;
}

interface StatsProps {
    items: StatItem[]
}

function StatItem({label, value}: StatItem){
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="text-[4rem] font-extralight">{value}</div>
            <div className="text-4xl font-thin">{label}</div>
        </div>
    )
}


export function Stats({items = statItems}: StatsProps){

    return (
        
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 ">
            {items.map((item, index) => (
                <StatItem key={index} label={item.label} value={item.value} />
            ))}
        </div>
       
    )

}