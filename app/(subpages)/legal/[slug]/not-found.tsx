import Link from 'next/link';

export default function LegalNotFound() {
  return (
    <div className="space-y-6 text-center py-12">
      <h1 className="text-3xl font-bold">Document Not Found</h1>
      <p className="text-lg text-gray-600">
        The legal document you're looking for doesn't exist or has been moved.
      </p>
      <div className="pt-4">
        <Link 
          href="/legal" 
          className="text-blue-600 hover:underline"
        >
          View all legal documents
        </Link>
      </div>
    </div>
  );
} 