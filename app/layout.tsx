import type { Metadata } from 'next';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import { metadata as metadataSettings } from '@/settings/metadata';
const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: metadataSettings.title,
  description: metadataSettings.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>{children}</body>
    </html>
  );
}
