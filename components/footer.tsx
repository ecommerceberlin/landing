
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { t } from "@/scripts/translate";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Newsletter } from "@/components/forms/newsletter";
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


const socialIcons = {
  twitter: (props: any) => <Twitter {...props} fill="currentColor" />,
  linkedin: (props: any) => <Linkedin {...props} fill="currentColor" />,
  facebook: (props: any) => <Facebook {...props} fill="currentColor" />,
  instagram: (props: any) => <Instagram {...props}  />,
  youtube: (props: any) => <Youtube {...props} fill="currentColor" />,
  // Add more as needed
}


export function Footer({baseLabel="support", people=[], links=[], legal=[], social=[]}: FooterProps) {



  return (
    <footer className="bg-ebe w-full p-5 min-h-[50vh]">

    <div className="flex flex-row gap-4">

      <div className="w-1/2">
      <SectionSecondaryTitle label={`${baseLabel}.title`} />

      <div className="grid grid-cols-2 gap-4 mt-10">

        {people.map((person) => (
          <div key={person.name}>
            <div className="uppercase">{person.name}</div>
            <div>{person.email}</div>
            <div>{person.phone}</div>
          </div>
        ))}
      </div>


      <div className="mt-4">
      {social.map((link) => {

const IconComponent = socialIcons[link.label.toLowerCase() as keyof typeof socialIcons] || socialIcons.twitter;

        return (
          <Button 
          key={link.label}
          variant="ghost" 
          size="icon" 
          className="rounded-full hover:bg-gray-100/10"
          asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
            <IconComponent className="h-7 w-7"  fill="currentColor"  />
            </a>
          </Button>
        )})}
      </div>


      <div className="mt-4">

      {legal.map((link) => (
        
          <Button key={link.href} variant="link" asChild className="text-base font-extralight">
          <Link href={link.href} >{t(`nav.${link.label}`)}</Link>
          </Button>
       
      ))}

      </div>




      </div>
      <div className="w-1/2">
      
      <div className="grid grid-cols-2 gap-4">
      {links.map((link) => (
        <div key={link.label}>
          <Button variant="link" asChild className="text-[1.5rem] font-extralight">
          <Link href={link.href} >{t(`nav.${link.label}`)}</Link>
          </Button>
        </div>
      ))}
      </div>

      <Newsletter baseLabel="newletter" />
      
      </div>
    </div>
    
    </footer>
  );
}