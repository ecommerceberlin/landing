"use client"

import ReactPlayer from 'react-player/youtube'

export function VideoYoutube({url}: {url: string}) {
    return <ReactPlayer url={url} />
}