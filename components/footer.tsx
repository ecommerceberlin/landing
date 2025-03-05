
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { t } from "@/scripts/translate";

import { Newsletter } from "@/components/forms/newsletter";
import { SocialLinks } from "@/components/nav/social-links";




interface SalesPerson {
  name: string;
  email: string;
  phone: string;
}

interface Link {
  label: string;
  href: string;
}

export interface FooterProps {
  baseLabel: string;
  people: SalesPerson[];
  links: Link[];
  legal: Link[];
  social: Link[];
}




export function Footer({baseLabel="support", people=[], links=[], legal=[], social=[]}: FooterProps) {

  return (
    <footer className="bg-ebe w-full p-5 pb-20">


    <div className="flex flex-col lg:flex-row gap-4">

      <div className="w-full lg:w-1/2">
      <SectionSecondaryTitle label={`${baseLabel}.title`} className="md:mr-[20%]" />

      <div className="flex flex-col md:flex-row gap-10 mt-10">

        {people.map((person) => (
          <div key={person.name} className="flex-1">
            <div className="uppercase text-xl mb-4">{person.name}</div>
            <div>{person.email}</div>
            <div>{person.phone}</div>
          </div>
        ))}
      </div>
      </div>

      <div className="w-full lg:w-1/2">
      
      <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-2">
      {links.map((link) => (
        <div key={link.label}>
          <Button variant="link" asChild className="text-[1.5rem] font-light">
          <Link href={link.href} >{t(link.label)}</Link>
          </Button>
        </div>
      ))}
      </div>

      <SocialLinks links={social} className="lg:hidden block" />

      <Newsletter baseLabel="newsletter" className="mt-20" />
      
      </div>
    </div>

    
    <SocialLinks links={social} className="lg:block hidden" />



    <div className="flex flex-col-reverse lg:flex-row gap-4">


    <div className="w-full lg:w-1/2">{legal.map((link) => (
      <Button key={link.href} variant="link" asChild className="text-base font-light">
      <Link href={link.href} >{t(link.label)}</Link>
      </Button>
    ))}</div>


    <div className="w-full lg:w-1/2 flex flex-row lg:flex-row-reverse gap-4 uppercase text-[1.5rem] font-light my-20 lg:my-0 leading-none">
    
    <div className="w-1/2">{t("event.location")}</div>
    <div className="w-1/2">{t("event.date")}</div>

    </div>

  
    </div>
    
    </footer>
  );
}





/*
<div className="mt-4">

</div>


<div className="mt-4">


</div>
 */