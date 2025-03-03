import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { testimonies } from '@/settings/testimonies';
export interface Testimony {
  text: string;
  logotype: string;
}

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export function Testimonials() {
  return (
    <ScrollArea className={cn('my-5 w-full min-w-[100dvw] max-w-[100dvw] overflow-x-hidden')}>
      <div
        className={cn(
          'flex space-x-4 pb-4 bg-gradient-to-t',
          gradientClassName
        )}
      >
        <div
          className={cn(
            'flex pl-4 pr-4 min-w-fit',
            // gradientClassName,
            'bg-gradient-to-t'
          )}
        >
          {testimonies.map((testimony, index) => (
            <figure
              key={index}
              className="shrink-0 w-[400px] h-[300px] flex flex-col mr-4 last:mr-0 bg-white"
            >
              
              <div
                className={cn(
                  'h-[90%] p-6 relative bg-gradient-to-b',
                  gradientClassName
                )}
              >
                <blockquote className="text-lg">"{testimony.text}"</blockquote>
              </div>

              {/* Logo area - 10% height */}
              <figcaption className="h-[10%] aspect-1/3 min-h-[50px] bg-white flex items-center justify-start pl-5 pb-5">
                <Image
                  src={testimony.logotype}
                  alt={testimony.logotype}
                  width={130}
                  height={20}
                  className="object-contain max-h-[45px]"
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
