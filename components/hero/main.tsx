import { Gradient } from './gradient';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';
import { t } from '@/scripts/translate';
import {MoreButton} from '@/components/nav/morebutton'



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
      <div className="z-50 absolute bottom-0 left-0 w-[100%] max-w-[1200px] h-fit  text-white p-5">
      <div className="flex flex-col justify-between h-fit space-y-20 md:space-y-[10rem]">
      <div className="space-y-2">
      <h3 className="uppercase font-light text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] leading-[1]">
      {t(label)}
      </h3>
      <p className="font-extralight md:font-thin text-[1.2rem] md:text-[1.35rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.5rem] leading-[1]">
      {t(secondaryLabel)}
      </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
      {buttons.map((button) => (
      <MoreButton key={button.href} label={button.label} href={button.href} variant="hero" size="hero" />
      ))}
      </div>
      </div>
      </div>
    </FullPagePhoto>
  );
}
