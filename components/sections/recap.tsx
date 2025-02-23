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
        {title} <span className="text-[50%] align-top">(RECAP)</span>
        </h4>
        <div className="flex gap-4 flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex flex-col gap-4 justify-between pr-20">
                <p className="text-xl font-light">{description}</p>
                <div className="flex gap-4 flex-row justify-start">
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="text-[5rem] font-light">120+</div>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="text-[5rem] font-light">97</div>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
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