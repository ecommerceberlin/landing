import {Gradient} from '@/components/hero/gradient'
import {t} from '@/scripts/translate'
import { PremiumItem } from '@/types'
import {MoreButton} from '@/components/nav/morebutton'
import {PremiumItemPrice} from '@/components/sections/premium/premium-item-price'
import {PremiumListItemImage} from '@/components/sections/premium/premium-list-item-image'
import { PremiumItemStatus } from '@/components/sections/premium/premium-item-status'

interface PremiumListProps {
    items: PremiumItem[];
    baseLabel: string;
    excludeLabel?: string;
}

export function PremiumList({items=[], baseLabel="premium", excludeLabel}: PremiumListProps) {
return (
<div className="md:ml-[25vw] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 md:w-[70vw] gap-[1px]">
    {items.map((item, index) => {

        if (excludeLabel && item.label === excludeLabel) {
            return null;
        }

        return (
            <figure
                key={item.ticketId}
                className="relative aspect-square w-full group"
            >
                {/* <Link href={`/premium/${item.label}`} className="block w-full h-full"> */}
                    <PremiumItemStatus ticketId={item.ticketId} />
                    <PremiumListItemImage image={item.thumbnail} />
                    <Gradient 
                        variation={index % 3} 
                        className="absolute bottom-[30%] right-0 w-[100px] h-[100px] opacity-100 group-hover:opacity-50 transition-all duration-300" 
                    />

                    <figcaption className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-gradient-to-t from-black via-black/20 to-transparent z-10 w-full">
                        <div className="text-white space-y-4 w-full">
                            <h3 className="text-[2rem] md:text-[3rem] font-thin tracking-tighter leading-none text-center md:text-left">
                                {t(`premium.${item.label}.title`)}
                            </h3>
                            
                            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                                <PremiumItemPrice ticketId={item.ticketId} className="flex-1" />

                                <div className="flex flex-end">
                                <MoreButton label={`${baseLabel}.item.button`} href={`/premium/${item.label}`} variant="hero" size="hero" className="w-fit"/>
                                </div>
                                
                            </div>
                        </div>

                        
                    </figcaption>
                {/* </Link> */}
            </figure>
        )
    })}
</div>)}

//  <VideoYoutube url={item.videoSrc} />
//