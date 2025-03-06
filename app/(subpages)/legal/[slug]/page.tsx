import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Markdown } from '@/components/text/markdown';
import { getMarkdownContent, listMarkdownFiles } from '@/lib/markdown';
import { t } from '@/scripts/translate';

interface LegalPageProps {
  params: {
    slug: string;
  };
}

// export function generateMetadata({ params }: LegalPageProps): Metadata {
//   const { slug } = params;
  
//   // Format the title based on the slug
//   const formattedTitle = slug
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
  
//   return {
//     title: formattedTitle,
//     description: `Legal information about ${formattedTitle}`,
//   };
// }

// export function generateStaticParams() {
//   const slugs = listMarkdownFiles('ecommerceberlin.com');
//   return slugs.map(slug => ({ slug }));
// }

export default async function LegalPage({ params }: LegalPageProps) {
  const slug = (await params).slug;
  
  try {
    
    const content = getMarkdownContent(`ecommerceberlin.com/${slug}`);
    
    return (
      <div className="space-y-8">
        <Markdown>{content}</Markdown>
      </div>
    );
  } catch (error) {
    console.error(`Error loading legal page for slug: ${slug}`, error);
    notFound();
  }
} 