"use client"


import {getCldVideoUrl} from "next-cloudinary";
import {t} from '@/scripts/translate'
import { StatItem } from "@/components/sections/stats";



export interface RecapProps {
    baseLabel: string;
    videoSrc: string;
    stats: StatItem[];
}

export function Recap({baseLabel, videoSrc, stats = []}: RecapProps) {
    return (
    <div className="w-full px-5 my-10 md:my-30">
        <h4 className="text-[4rem] font-light uppercase max-w-[45rem] leading-[1] pb-10">
         <span className="text-[50%] align-top">(RECAP)</span>
        </h4>
        <div className="flex gap-4 flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex flex-col gap-4 justify-between md:pr-20">
                <p className="text-xl font-light">{t(`${baseLabel}.description`)}</p>
                <div className="flex gap-4 flex-row justify-start">

                    {stats.map((stat) => (
                        <div className="flex flex-col gap-2 w-1/2">
                        <div className="text-[5rem] font-light">{stat.value}</div>
                        <p>{stat.label}</p>
                    </div>
                    ))}

                </div>
            </div>
            <div className="flex-1 lg:min-h-[500px] bg-gray-100">
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