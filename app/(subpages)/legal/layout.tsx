import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Legal',
    default: 'Legal Documents',
  },
  description: 'Legal information and documents',
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}