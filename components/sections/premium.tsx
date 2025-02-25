

import { items } from '@/settings/premium'
import { VideoYoutube } from '@/components/video-youtube'

export function Premium() {
    return (
        <div className="md:ml-[30vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <div key={item.ticketId}>
                    <VideoYoutube url={item.videoSrc} />
                </div>
            ))}
        </div>
    )
}