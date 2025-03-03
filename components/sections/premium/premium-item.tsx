import { items } from '@/settings/premium'
import {t} from '@/scripts/translate'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { MediaItem } from '@/components/sections/premium/premium-item-media'
import { PremiumItem as PremiumItemType } from '@/types'
import { Markdown } from '@/components/text/markdown'
import { BoxWithHorizontalItems } from '@/components/containers/box-horizontal';
import { PremiumItemPrice } from '@/components/sections/premium/premium-item-price';
import { PremiumItemStatus } from '@/components/sections/premium/premium-item-status';
export function PremiumItem({media, label, ticketId, thumbnail}: PremiumItemType) {
    return (

        <div className="md:ml-[25vw] flex flex-col gap-4 space-y-4">

            <BoxWithHorizontalItems>

            <div className="mt-5 max-w-[800px] flex-1 relative">
            <Markdown className="text-lg md:text-[2rem]font-extralight tracking-normal [&>ul]:m-4 w-full">{t(`premium.${label}.description`)}</Markdown>

            <PremiumItemStatus ticketId={ticketId} size="large" />
            </div>

            <div className="w-fit mt-7 px-10">
                <PremiumItemPrice ticketId={ticketId} />
            </div>

            </BoxWithHorizontalItems>
          
            <ScrollArea className="w-full">
                <div className="flex space-x-4 pb-4" style={{ width: `${media?.length * 320}px` }}>
                    {media?.map((media, index) => (
                        <div 
                            key={index} 
                            className="relative aspect-video w-fit h-[500px] flex-shrink-0 overflow-hidden"
                        >
                            <MediaItem media={media} />
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}