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
    <div>
      {initiatives.map((initiative, index) => (
        <div
          key={initiative.title}
          className={cn(
            'px-5 py-2  cursor-pointer  transition-colors active:scale-[0.98] select-none flex flex-row gap-4 justify-between items-center',
            index % 2 === 0
              ? 'bg-ebe hover:bg-gray-200'
              : 'bg-white hover:bg-gray-200'
          )}
          role="button"
        >
          <h4 className="text-[3rem] font-light uppercase">
            {initiative.title}
          </h4>
          <div className="text-[5rem] font-thin">+</div>
        </div>
      ))}
    </div>
  );
}
