import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const defaultInitiatives = [
  {
    title: 'NEWS',
  },
  {
    title: 'AWARDS',
  },
  {
    title: 'PODCAST',
  },
];

export function Initiatives({
  initiatives = defaultInitiatives,
}: {
  initiatives: any[];
}) {
  return (
    <Accordion type="single" collapsible>
      {initiatives.map((initiative, index) => (
        <AccordionItem 
          key={initiative.title} 
          value={initiative.title}
          className={cn(
            index % 2 === 0 ? 'bg-ebe' : 'bg-white'
          )}
        >
          <AccordionTrigger 
            className="px-5 py-2 hover:bg-gray-200 transition-colors"
          >
            <div className="flex justify-between items-center w-full">
              <h4 className="text-[3rem] font-light uppercase">
                {initiative.title}
              </h4>
            </div>
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
