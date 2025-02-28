import { items } from '@/settings/premium'
import {t} from '@/scripts/translate'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { MediaItem } from '@/components/sections/premium/premium-item-media'
import { PremiumItem as PremiumItemType } from '@/types'

export function PremiumItem({media, label, ticketId, thumbnail}: PremiumItemType) {
    return (
        <div className="md:ml-[25vw] flex flex-col gap-4 space-y-4">
            <h3 className="text-2xl md:text-[2rem] font-thin tracking-tighter">{t(`premium.${label}.description`)}</h3>

            <ScrollArea className="w-full">
                <div className="flex space-x-4 pb-4" style={{ width: `${media?.length * 320}px` }}>
                    {media?.map((media, index) => (
                        <div 
                            key={index} 
                            className="relative aspect-video w-fit h-[300px] flex-shrink-0 overflow-hidden"
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