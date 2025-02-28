
import { Button } from '@/components/ui/button';
import { Gradient } from './gradient';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';
import { t } from '@/scripts/translate';
import Link from 'next/link';

export interface HeroButtonProps {
  label: string;
  href: string;
}

export interface HeroProps {
  label: string;
  secondaryLabel: string;
  image: string;
  buttons: HeroButtonProps[];
}



export function Hero({ label, secondaryLabel, buttons = [], image }: HeroProps) {
  return (
    <FullPagePhoto src={image}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      <Gradient className="top-[3rem] w-[20vw] h-[40vh]" />
      <div className="z-50 absolute bottom-0 left-0 w-[100%] max-w-[1200px] h-fit  text-white pl-5 pb-5">
      <div className="flex flex-col justify-between h-full space-y-5">
      <div>
      <h3 className="uppercase font-light text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] leading-[1]">
      {t(label)}
      </h3>
      <p className="font-thin text-base md:text-[1.5rem] lg:text-[2rem] xl:text-[3rem] leading-[1]">
      {t(secondaryLabel)}
      </p>
      </div>
      <div className="flex gap-4 mt-[20vh]">
      {buttons.map((button) => (
      <Button key={button.href} variant="hero" size="hero" asChild>
      <Link href={button.href} key={button.label}>      
      {t(button.label)}
      </Link>
      </Button>
      ))}
      </div>
      </div>
      </div>
    </FullPagePhoto>
  );
}
