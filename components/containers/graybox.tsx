interface GrayBoxProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function GrayBox({ title, description, children }: GrayBoxProps) {
  return (
    <div className="w-full px-5 py-10 bg-gray-100">
      <h2 className="text-2xl font-normal uppercase">{title}</h2>
      <p className="">{description}</p>
      <div className="mt-5 ml-[30%]">{children}</div>
    </div>
  );
}
