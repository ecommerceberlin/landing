"use client"

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useSWR from 'swr';
import { PresenterDTO } from '@/db/participant/transformer';
import { fetcher } from '@/lib/fetcher';
 

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
          {presenters.map((presenter, index) => (
            <figure
              key={presenter.id}
              className="shrink-0 w-[300px] h-[500px] flex flex-col mr-4 last:mr-0 bg-white"
            >
              <div className="aspect-[3/4] relative">
                <Image 
                  src={presenter.avatar} 
                  alt={presenter.full_name} 
                  width={300} 
                  height={500} 
                  className="object-cover w-full h-full object-center grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Logo area - 10% height */}
              <figcaption className="h-[10%] min-h-[40px] bg-white flex items-center justify-start pl-5 pb-5">
               
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
