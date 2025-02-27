import { cn } from '@/lib/utils';


const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

  interface GradientBoxProps {
    children: React.ReactNode;
    title: React.ReactNode;
  }

export const GradientBox = ({ children, title }: GradientBoxProps) => {
  return (
    <div className="w-full">
    <div className={cn('bg-gradient-to-b h-[7rem] flex items-end justify-center', gradientClassName)}>
    {title}
    </div>

    <div>{children}</div>
    </div>
  );
};
