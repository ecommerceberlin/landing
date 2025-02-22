"use client"

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useSWR from 'swr';
import { PresenterDTO } from '@/db/participant/transformer';
import { fetcher } from '@/lib/fetcher';
import {Linkedin} from 'lucide-react';
import {Gradient} from '@/components/hero/gradient';

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';


export function Speakers() {
  const { data: presenters, isLoading, error } = useSWR<PresenterDTO[]>('/api/presenters', fetcher);


  if (!presenters || isLoading || error) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className={cn('my-5 w-full max-w-[100vw] overflow-x-hidden')}>
      <div
        className={cn(
          'flex space-x-4 pb-4 bg-gradient-to-t',
         
        )}
      >
        <div
          className={cn(
            'flex pl-4 pr-4 min-w-fit',
            // gradientClassName,
          
          )}
        >
          {presenters.map((presenter, index) => {

            if(!presenter.avatar || !presenter.avatar.includes("https://")) {
              return null;
            }

            return (
                <figure
                  key={presenter.id}
                  className="shrink-0 w-[250px] h-[500px] flex flex-col mr-4 last:mr-0 bg-white"
                >
                  <div className="aspect-[1/2] relative">
                    <Image 
                      src={presenter.avatar} 
                      alt={presenter.full_name} 
                      width={300} 
                      height={600} 
                      className="object-cover w-full h-full object-center grayscale hover:grayscale-0 transition-all duration-300"
                      quality={100}
                    />
                    {/* <div className="absolute top-0 left-0">
                      <Linkedin className="w-10 h-10 text-white  mix-blend-screen" />
                    </div> */}
                    <Gradient variation={index % 3} className="top-[250px] w-[100px] h-[150px]" />


                      {/* Logo area - 10% height */}
                  <figcaption className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end pl-3 pb-7 pr-10 from-black/80 via-transparent to-transparent bg-gradient-to-t">
                    <div className="text-white text-2xl font-light tracking-tighter">
                      {presenter.full_name}
                    </div>
                    <div className="text-white text-sm">
                      {presenter.position}
                    </div>
                    <div className="text-white text-sm">
                      {presenter.organization}
                    </div>
                   </figcaption>


                  </div>
    
                
                </figure>
              )
          })}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
