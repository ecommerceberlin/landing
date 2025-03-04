

import Image from 'next/image'
import {Skeleton} from '@/components/ui/skeleton'


export function PremiumListItemImage({image}: {image: string}) {
    
    return (image ? <Image 
            src={image} 
            alt={image} 
            fill 
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        /> : <Skeleton className="w-full h-full" />)
    

    //grayscale group-hover:grayscale-0 transition-all duration-300
}0