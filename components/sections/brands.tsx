"use client"

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';

export interface BrandsProps {
  items: string[];
}

export function Brands({items}: BrandsProps) {

  return (
    <ScrollArea className={cn('w-full min-w-[100dvw] max-w-[100dvw] overflow-x-hidden bg-ebe')}>
      <div className="flex space-x-4 pb-4">
       
          {items?.map((item, idx) => (
            <figure
              key={idx}
              className="shrink-0 w-[200px] h-[100px] flex items-center justify-center mr-8 last:mr-0 "
            >              
                <Image
                  src={item}
                  alt={item}
                  width={200}
                  height={100}
                  className="grayscale object-contain max-w-[200px] max-h-[80px] p-2"
                />
             
            </figure>
          ))}
        
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
