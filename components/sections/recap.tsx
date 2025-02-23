"use client"


import {getCldVideoUrl} from "next-cloudinary";
interface RecapProps {
    title?: string;
    description: string;
    videoSrc?: string;
}

export function Recap({title="E-commerce Berlin Expo 2025", description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1738233915/EBE_recap_ogxdam.mov"}: RecapProps) {
    return (
    <div className="w-full px-5 my-10 md:my-30">
        <h4 className="text-[4rem] font-light uppercase max-w-[45rem] leading-[1] pb-10">
        {title}
        </h4>
        <div className="flex gap-4 flex-col md:flex-row">
            <div className="w-full md:w-1/3">
                <p className="text-xl font-light">{description}</p>
            </div>
            <div className="flex-1 min-h-[500px] bg-gray-100">
                <div className="aspect-video w-full h-full relative">
                  <video 
                    src={getCldVideoUrl({
                        src: videoSrc,
                        width: 1920,
                        height: 1080,
                        format: 'mp4'
                    })}
                    width="1920"
                    height="1080"
                    playsInline
                    controls={true}
                    autoPlay={false}
                    loop={false}
                    className="w-full h-full absolute inset-0 object-cover"
                  />
                </div>
            </div>
        </div>
    </div>
    )
}