"use client"

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { ExhibitorDTO } from '@/db/participant/transform-to-exhibitor';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';


function Container({children}: {children: React.ReactNode}){

  return ( <div className="px-[10%] w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">{children}</div>)
}



export function ExhibitorsLoading(){

  return (
    <Container>
      {Array.from({length: 20}).map((_, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <Skeleton className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] animate-pulse"></Skeleton>
        </div>  
      ))}
    </Container>
  )
}


export function Exhibitors() {
  const { data: exhibitors, isLoading, error } = useSWR<ExhibitorDTO[]>('/api/exhibitors', fetcher);

  if (!exhibitors || isLoading || error) {
    return <div>Loading...</div>;
  }

  const sliced = exhibitors.slice(0, 20)

  return (
    
    <Container>
      {sliced.map((exhibitor) => (
        <div key={exhibitor.id} className="flex flex-col items-center justify-center">
          <Image 
          src={exhibitor.a} 
          alt={exhibitor.n} 
          width={100} 
          height={100} 
          className="object-contain max-w-[80px] max-h-[60px] md:max-w-[100px] md:max-h-[80px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </Container>
    
  );
}