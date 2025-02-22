import { cn } from '@/lib/utils';

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export const GradientBox = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className="w-full">
    <div className={cn('bg-gradient-to-b h-[7rem] flex items-end justify-center uppercase text-4xl font-extralight', gradientClassName)}>{title}</div>

    <div>{children}</div>
    </div>
  );
};
