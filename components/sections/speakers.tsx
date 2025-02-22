import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export interface Testimony {
  text: string;
  company: string;
  logoUrl: string;
}

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export const testimonies: Testimony[] = [
  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },
  // ... add more testimonies
];

export function Speakers() {
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
          {testimonies.map((testimony, index) => (
            <figure
              key={index}
              className="shrink-0 w-[300px] h-[400px] flex flex-col mr-4 last:mr-0 bg-white"
            >
              {/* Testimony area - 90% height */}
              <div
                className={cn(
                  'h-[90%] p-6 relative bg-gradient-to-b',
                  gradientClassName
                )}
              >
                <blockquote className="text-lg">{testimony.text}</blockquote>
              </div>

              {/* Logo area - 10% height */}
              <figcaption className="h-[10%] min-h-[40px] bg-white flex items-center justify-start pl-5 pb-5">
                <Image
                  src={testimony.logoUrl}
                  alt={testimony.company}
                  width={100}
                  height={20}
                  className="object-contain"
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
