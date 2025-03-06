import Link from 'next/link';
import { Metadata } from 'next';
import { listMarkdownFiles } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Legal Documents',
  description: 'Legal information and documents',
};

export default function LegalIndexPage() {
  const legalDocs = listMarkdownFiles('ecommerceberlin.com');
  
  // Format the document names for display
  const formattedDocs = legalDocs.map(doc => ({
    slug: doc,
    title: doc
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }));
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Legal Documents</h1>
      
      {formattedDocs.length > 0 ? (
        <ul className="space-y-4">
          {formattedDocs.map(doc => (
            <li key={doc.slug} className="border-b pb-2">
              <Link 
                href={`/legal/${doc.slug}`}
                className="text-xl hover:text-blue-600 transition-colors"
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-600">
          No legal documents found. Please check the markdown files in the /markdown/ecommerceberlin.com directory.
        </p>
      )}
    </div>
  );
} 