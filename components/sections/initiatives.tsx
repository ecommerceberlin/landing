import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { defaultInitiatives } from '@/settings/inititatives';
import { Plus, Minus } from 'lucide-react';
export interface Initiative {
  title: string;
}

interface InitiativesProps {
  initiatives?: Initiative[];
}

export function Initiatives({
  initiatives = defaultInitiatives,
}: InitiativesProps) {
  return (
    <Accordion type="single" collapsible>
      {initiatives.map((initiative, index) => (
        <AccordionItem 
          key={initiative.title} 
          value={initiative.title}
        >
          <AccordionTrigger 
            className={cn("p-0 px-5 hover:bg-gray-200 transition-colors cursor-pointer text-[2rem] md:text-[4rem] font-light uppercase",
                index % 2 === 0 ? 'bg-ebe' : 'bg-white'
            )}
            openContent={<span className="block m-0 p-0 font-thin text-[4rem] md:text-[8rem] leading-none">-</span>} 
            closedContent={<span className="block m-0 p-0 font-thin text-[4rem] md:text-[8rem] leading-none">+</span>}
          >
           {initiative.title}
          </AccordionTrigger>
          <AccordionContent className="px-5 py-4">
            {/* Add your content here */}
            Content for {initiative.title}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
