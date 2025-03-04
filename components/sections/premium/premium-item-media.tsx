
import {getCldVideoUrl} from 'next-cloudinary'
import { VideoYoutube } from '@/components/video-youtube'
import Image from 'next/image'
// import { cn } from '@/lib/utils'

export function MediaItem({media}: {media: string}) {

    if (media.includes('https://youtu') || media.includes('youtube.com/')) {
        return <VideoYoutube className="w-full h-full" url={media} />
    }

    if (media.includes('cloudinary') && media.includes('video/upload')) {
        return  <video 
        src={getCldVideoUrl({
            src: media,
            width: 1080,
            height: 610,
            format: 'mp4'
        })}
        width="1080"
        height="610"
        playsInline
        controls={true}
        autoPlay={true}
        loop={false}
        className="w-full h-full absolute inset-0 object-cover"
      />
    }

    return (
        <Image src={media} alt={media} fill className="object-cover" sizes="(max-width: 768px) 50vw,
        (max-width: 1200px) 33vw,
        25vw" />
    )

}