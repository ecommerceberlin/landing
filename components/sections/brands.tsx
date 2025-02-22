"use client"

import * as React from 'react';
import { CldImage } from 'next-cloudinary';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { ExhibitorDTO } from '@/db/participant/transform-to-exhibitor';

interface BrandsProps {
  companyIds: number[];
}

export function Brands({companyIds=[]}: BrandsProps) {
  const { data: exhibitors, isLoading, error } = useSWR<ExhibitorDTO[]>('/api/exhibitors', fetcher);


  const filteredExhibitors = exhibitors?.filter(exhibitor => companyIds.includes(exhibitor.id));

  if (!exhibitors || isLoading || error) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className={cn('w-full max-w-[100vw] overflow-x-hidden bg-ebe')}>
      <div className="flex space-x-4 pb-4">
       
          {filteredExhibitors?.map((exhibitor, index) => (
            <figure
              key={index}
              className="shrink-0 w-[200px] h-[100px] flex items-center justify-center mr-8 last:mr-0 "
            >              
                <CldImage
                  src={exhibitor.a}
                  alt={exhibitor.n}
                  width={200}
                  height={100}
                  className="object-contain max-w-[200px] max-h-[80px] p-2"
                  grayscale={true}
                  removeBackground={true}
                  format="png"
                />
             
            </figure>
          ))}
        
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
