import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gradient } from './gradient';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';

export function Hero() {
  return (

    <FullPagePhoto src="https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto,w_auto,c_scale/v1738234466/header.jpg">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

<Gradient />

<div className="z-50 absolute bottom-0 left-0 w-[100%] max-w-[1200px] h-fit  text-white pl-5 pb-5">
  <div className="flex flex-col justify-between h-full space-y-5">
    <div>
      
        <h3 className="uppercase font-light text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] leading-[1]">
          Find your next e-commerce client here
        </h3>
        <p className="font-thin text-base md:text-[1.5rem] lg:text-[2rem] xl:text-[3rem] leading-[1]">
          Unlock your potential with lorem ipsum dolor sit amet
        </p>
      
    </div>

    <div className="flex gap-4">
      <Button variant="secondary" size="hero">
        Get Started
      </Button>

      <Button variant="secondary" size="hero">
        Get Started
      </Button>
    </div>
  </div>
</div>


    </FullPagePhoto>

  );
}
