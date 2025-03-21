import { cn } from '@/lib/utils';

const gradientClassName =
  'w-full h-full from-[#FCE61D] to-[rgba(255,255,255,0.2)]';

interface GradientProps {
  className?: string;
  variation?: number;
}
  
export function Gradient({className="top-[5rem] w-[20vw] h-[60vh]", variation=0}: GradientProps) {


  return (
    <div className={cn("z-8 absolute right-0 grid grid-rows-[1fr_2fr_1fr]", className)}>
      {/* First gradient - right aligned */}
      <div className="w-1/3 ml-auto">
        <div className={cn('h-full bg-gradient-to-t', gradientClassName,
        variation === 1 && 'bg-transparent' 
        )} />
      </div>

      {/* Middle gradient - left aligned */}
      <div className="w-2/3">
        <div className={cn('h-full bg-gradient-to-t', gradientClassName
        )} />
      </div>

      {/* Last gradient - right aligned */}
      <div className="w-1/3 ml-auto">
        <div className={cn('h-full bg-gradient-to-b', gradientClassName,
        variation === 2 && 'bg-transparent' 
        )} />
      </div>
    </div>
  );
}
