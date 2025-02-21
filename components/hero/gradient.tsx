import { cn } from '@/lib/utils';

const gradientClassName =
  'w-full h-full from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export function Gradient() {
  return (
    <div className="z-50 absolute top-[5rem] right-0 w-[20vw] h-[60vh] grid grid-rows-[1fr_2fr_1fr]">
      {/* First gradient - right aligned */}
      <div className="w-1/3 ml-auto">
        <div className={cn('h-full bg-gradient-to-t', gradientClassName)} />
      </div>

      {/* Middle gradient - left aligned */}
      <div className="w-2/3">
        <div className={cn('h-full bg-gradient-to-t', gradientClassName)} />
      </div>

      {/* Last gradient - right aligned */}
      <div className="w-1/3 ml-auto">
        <div className={cn('h-full bg-gradient-to-b', gradientClassName)} />
      </div>
    </div>
  );
}
