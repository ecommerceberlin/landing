
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FullPagePhotoProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
}

export function FullPagePhoto({src, children=null, className=""}: FullPagePhotoProps) {
  return (
    <div className={cn("relative w-full max-w-[100dvw] h-full bg-gradient-to-b from-white via-white to-[#FCE61D] px-5 pb-5", className)}>
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt="Hero"
        fill
        sizes="100vw"
        priority
        quality={100}
        className="object-cover"
      />

      {children}

    </div>
    </div>
  );
}