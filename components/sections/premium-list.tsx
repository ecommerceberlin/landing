

import { items } from '@/settings/premium'
import { VideoYoutube } from '@/components/video-youtube'
import Image from 'next/image'
import {Gradient} from '@/components/hero/gradient'
import Link from 'next/link'
import {t} from '@/scripts/translate'

export function PremiumList() {
    return (
        <div className="md:ml-[30vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">{items.map((item, index) => (<figure
    key={item.ticketId}
    className="shrink-0 w-full md:w-[300px] h-[300px] flex flex-col md:mr-4 last:mr-0 bg-white group hover:cursor-pointer"
    >
    <div className="aspect-square relative">
    <Link href="/premium" >
    <Image 
        src={item.thumbnail} 
        alt={item.name} 
        fill 
        className="object-cover w-full h-full object-center grayscale group-hover:grayscale-0 transition-all duration-300"
        quality={100}
    />
    
    <Gradient variation={index % 3} className="top-[150px] w-[100px] h-[100px] opacity-100 group-hover:opacity-50 transition-all duration-300" />

    <figcaption className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end pl-3 pb-5 pr-10 from-black/90 via-black/10 to-transparent bg-gradient-to-t">
    <div className="text-white text-2xl font-light tracking-tighter">
    {t(`premium.${item.name}.title`)}
    <div className="text-white text-sm">PRICE</div>
    </div>
    </figcaption>
    </Link>
    </div>
    </figure>))}
</div>)}

//  <VideoYoutube url={item.videoSrc} />
//