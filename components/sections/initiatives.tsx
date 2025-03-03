import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { defaultInitiatives } from '@/settings/inititatives';
import Image from 'next/image';
import { SectionSecondaryTitle } from '@/components/text/section-secondary-title';
import { t } from '@/scripts/translate';
import { MoreButton } from '@/components/nav/morebutton';

export interface Initiative {
  label: string;
  image: string;
  link: string;
  color: "bg-ebe" | "bg-white";
}

interface InitiativesProps {
  initiatives?: Initiative[];
  baseLabel: string;
  className?: string;
}

export const AccordionState = ({children = "+"}: {children?: React.ReactNode}) => <span className="block m-0 p-0 font-thin text-[4rem] md:text-[8rem] leading-none">{children}</span>

export function Initiatives({
  initiatives = defaultInitiatives,
  baseLabel,
  className
}: InitiativesProps) {
  return (

    <div className="w-full">
     <div className="max-w-[50rem]">
     <SectionSecondaryTitle label={t(`${baseLabel}.title`)} />
     <p>{t(`${baseLabel}.description`)}</p>
     </div>
     <Accordion type="single" collapsible className="mt-10 md:ml-[33%]">
      {initiatives.map((initiative, index) => (
        <AccordionItem 
          key={initiative.label} 
          value={initiative.label}
          className={cn(index % 2 === 0 ? 'bg-ebe' : 'bg-white',
             'transition-transform duration-300 hover:scale-102',
             '[&[data-state=open]]:scale-102'
          )}
        >
          <AccordionTrigger 
            className={cn("p-0 px-5 transition-colors cursor-pointer text-[2rem] md:text-[4rem] font-light uppercase"
            )}
            openContent={<AccordionState>-</AccordionState>} 
            closedContent={<AccordionState>+</AccordionState>}
          >
           {t(`${baseLabel}.${initiative.label}.title`)}
          </AccordionTrigger>
          <AccordionContent className="px-5 py-4">
            
            <div className="flex flex-col-reverse md:flex-row gap-4 mb-5">
              <div className="flex flex-col gap-4 w-1/2 justify-end">
              {initiative.link && <MoreButton label={t(`${baseLabel}.${initiative.label}.button`)} href={initiative.link} variant="hero" size="hero" className="w-fit"/>}
              </div>

              <div className="flex flex-col gap-4 w-1/2 justify-end">
                {t(`${baseLabel}.${initiative.label}.description`)}
               </div>
            </div>

            <div className="aspect-video">
            <Image src={initiative.image} alt={t(`${baseLabel}.${initiative.label}.title`)} width={1000} height={1000} className="w-full object-fill" />
            </div>

          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  );
}
