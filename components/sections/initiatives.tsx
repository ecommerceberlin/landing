import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { defaultInitiatives } from '@/settings/inititatives';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export interface Initiative {
  title: string;
  description: string;
  image: string;
  link: string;
  color: "bg-ebe" | "bg-white";
}

interface InitiativesProps {
  initiatives?: Initiative[];
}

export const AccordionState = ({children = "+"}: {children?: React.ReactNode}) => <span className="block m-0 p-0 font-thin text-[4rem] md:text-[8rem] leading-none">{children}</span>

export function Initiatives({
  initiatives = defaultInitiatives,
}: InitiativesProps) {
  return (
    <Accordion type="single" collapsible>
      {initiatives.map((initiative, index) => (
        <AccordionItem 
          key={initiative.title} 
          value={initiative.title}
          className={cn(index % 2 === 0 ? 'bg-ebe' : 'bg-white',
             'transition-transform duration-300 hover:scale-102'
          )}
        >
          <AccordionTrigger 
            className={cn("p-0 px-5 transition-colors cursor-pointer text-[2rem] md:text-[4rem] font-light uppercase"
            )}
            openContent={<AccordionState>-</AccordionState>} 
            closedContent={<AccordionState>+</AccordionState>}
          >
           {initiative.title}
          </AccordionTrigger>
          <AccordionContent className="px-5 py-4">
            
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex flex-col gap-4 w-1/2 justify-end">
               <Button variant="default" size="hero" className="w-fit">
                <Link href={initiative.link}>
                  {initiative.title}
                </Link>
               </Button>
              </div>

              <div className="flex flex-col gap-4 w-1/2 justify-end">
                {initiative.description}
               </div>
            </div>

            <Image src={initiative.image} alt={initiative.title} width={1000} height={1000} className="w-full" />

          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
