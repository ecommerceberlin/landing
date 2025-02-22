import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gradient } from './gradient';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';

export function Hero() {
  return (

    <FullPagePhoto src="https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto,w_auto,c_scale/v1738234466/header.jpg">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

<Gradient />

<div className="z-50 absolute bottom-0 left-0 w-[100%] max-w-[1200px] h-[50%]  text-white pl-5 pb-5">
  <div className="flex flex-col justify-between h-full">
    <div>
      
        <h3 className="uppercase font-light text-[3rem] lg:text-[7rem] leading-[1]">
          Find your next e-commerce client here
        </h3>
        <p className="font-thin text-[3rem] leading-[1]">
          Unlock your potential with EventJuicer
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
