import { items } from '@/settings/premium'
import { VideoYoutube } from '@/components/video-youtube'
import {t} from '@/scripts/translate'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { PremiumItem } from '@/types'

interface PremiumProps {
    media: string[];
    label: string;
}


function MediaItem({media}: {media: string}) {

    if (media.includes('https://youtu') || media.includes('youtube.com/')) {
        return <VideoYoutube  className="w-full h-full" url={media} />
    }
    return (
        <Image src={media} alt={media} fill className="object-cover" />
    )

}


export function Premium({media, label}: PremiumProps) {
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