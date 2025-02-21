import { cn } from '@/lib/utils';

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export const GradientBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('bg-gradient-to-t', gradientClassName)}>{children}</div>
  );
};
