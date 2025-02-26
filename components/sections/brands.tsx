"use client"

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { ExhibitorDTO } from '@/db/participant/transform-to-exhibitor';
import { brands } from '@/settings/brands';
import Image from 'next/image';

export interface BrandsProps {
  logotypes?: string[];
}

export function Brands({logotypes = brands}: BrandsProps) {

  return (
    <ScrollArea className={cn('w-full max-w-[100vw] overflow-x-hidden bg-ebe')}>
      <div className="flex space-x-4 pb-4">
       
          {logotypes?.map((logotype, idx) => (
            <figure
              key={idx}
              className="shrink-0 w-[200px] h-[100px] flex items-center justify-center mr-8 last:mr-0 "
            >              
                <Image
                  src={logotype}
                  alt={logotype}
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
