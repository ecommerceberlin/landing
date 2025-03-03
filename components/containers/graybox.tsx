import { cn } from "@/lib/utils";
interface GrayBoxProps {  
  children: React.ReactNode;
  className?: string;
}

export function GrayBox({ children, className }: GrayBoxProps) {
  return (
    <div className={cn("w-full px-5 py-10 bg-gray-100", className)}>
    {children}
    </div>
  );
}
