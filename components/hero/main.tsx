import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gradient } from './gradient';

export function Hero() {
  return (
    <div className="relative w-full max-w-[100dvw] h-full bg-gradient-to-b from-white via-white to-[#FCE61D] px-5 pb-5">
      <div className="relative w-full h-full">
        <Image
          src="https://res.cloudinary.com/eventjuicer/image/upload/q_auto,f_auto,w_auto,c_scale/v1738234466/header.jpg"
          alt="Hero"
          fill
          sizes="100vw"
          priority
          quality={100}
          className="object-cover"
        />

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
      </div>
    </div>
  );
}
