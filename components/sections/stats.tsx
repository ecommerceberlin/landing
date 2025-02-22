

interface StatItem {
    label: string;
    value: string;
}

const defaultStatItems: StatItem[] = [
    {
        label: 'Stats',
        value: '10K'
    },
    {
        label: 'Stats',
        value: '300+'
    },
    {
        label: 'Stats',
        value: '100'
    },
    {
        label: 'Stats',
        value: '100'
    },
]


function StatItem({label, value}: StatItem){
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="text-[4rem] font-extralight">{value}</div>
            <div className="text-4xl font-thin">{label}</div>
        </div>
    )
}


export function Stats({items = defaultStatItems}:{items: StatItem[]}){

    return (
        
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 ">
            {items.map((item, index) => (
                <StatItem key={index} label={item.label} value={item.value} />
            ))}
        </div>
       
    )

}