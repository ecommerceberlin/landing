
interface GrayBoxProps {  
  children: React.ReactNode;
}

export function GrayBox({ children }: GrayBoxProps) {
  return (
    <div className="w-full px-5 py-10 bg-gray-100">
    {children}
    </div>
  );
}
