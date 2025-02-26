import { items } from '@/settings/premium'
import { VideoYoutube } from '@/components/video-youtube'
import {t} from '@/scripts/translate'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { PremiumItem } from '@/types'

interface PremiumProps {
    media: string[];
    label: string;
}

export function Premium({media, label}: PremiumProps) {
    return (
        <div className="md:ml-[25vw] flex flex-col gap-4">
        <h3 className="text-2xl md:text-[2rem] font-thin tracking-tighter">{t(`premium.${label}.description`)}</h3>

        <ScrollArea className={cn('my-5 w-full max-w-[100vw] overflow-x-hidden')}>
        <div
        className={cn(
        'flex space-x-4 pb-4 bg-gradient-to-t',
        )}
        >
        <div
        className={cn(
        'flex pl-4 pr-4 min-w-fit',
        // gradientClassName,
        )}>
        {media?.map((media, index) => {

            if (media.includes('https://youtu') || media.includes('youtube.com/')) {
                return <VideoYoutube key={index} url={media} />
            }
            return (
                <Image key={index} src={media} alt={`${label} media`} width={300} height={200} />
            )
        })}
        </div>
        </div>
        </ScrollArea>
        </div>
    )
}