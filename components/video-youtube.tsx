"use client"

import dynamic from 'next/dynamic'

// Import the component with SSR disabled
const ReactPlayer = dynamic(() => import('react-player/youtube').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-[200px] w-full bg-gray-100">Loading...</div>
})

export function VideoYoutube({url}: {url: string}) {
    return  <ReactPlayer url={url} />
}