import { MainMenu } from '@/components/nav/main-menu';
import Image from 'next/image';

export function Header() {
  return (
    <div className="w-full h-[5rem] bg-white">
      <div className="mx-5 flex flex-row items-center justify-between h-full">
        <div className="flex flex-row items-center gap-10">
          <Image
            className=""
            src="https://res.cloudinary.com/eventjuicer/image/upload/v1738234880/Logo_b_y_ebe_rkwvms.svg"
            alt="EBE"
            width={150}
            height={35}
            priority
          />
          <div className="uppercase text-sm font-light">
            10th edition
            <br /> 2026
          </div>
        </div>

        <MainMenu />
      </div>
    </div>
  );
}
