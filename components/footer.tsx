
import { SectionSecondaryTitle } from "@/components/text/section-secondary-title";


export function Footer() {
  return (
    <footer className="bg-ebe w-full p-5 min-h-[50vh]">

    <div className="flex flex-row gap-4">

      <div className="w-1/2">
      <SectionSecondaryTitle label="Do you have any questions?" />

      <div className="grid grid-cols-2 gap-4">

        <div>Noel Graf</div>
        <div>Lucas Zarna</div>
      </div>

      </div>
      <div className="w-1/2"></div>
    </div>
    
    </footer>
  );
}