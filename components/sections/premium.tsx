import { items } from '@/settings/premium'
import { VideoYoutube } from '@/components/video-youtube'
import {t} from '@/scripts/translate'
import Image from 'next/image'

export function Premium({name}: {name: string}) {
    const item = items.find(item => item.name === name)
    return (
        <div className="md:ml-[25vw] flex flex-col gap-4">
            <h3 className="text-2xl md:text-[2rem] font-thin tracking-tighter">{t(`premium.${item?.name}.description`)}</h3>
            <div>
            {item?.images.map((image, index) => (
                <Image key={index} src={image} alt={item?.name} width={100} height={100} />
            ))}
            </div>
            {item?.videoSrc && <VideoYoutube url={item?.videoSrc} />}
        </div>
    )
}