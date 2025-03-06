import type { Metadata } from 'next';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import { metadata as metadataSettings } from '@/settings/metadata';
import Script from 'next/script';
import { chatlioWidgetId } from '@/settings/app_rules';
import { RefererTracker } from '@/components/forms/referer-tracker';
import { GoogleTagManager } from '@/components/analytics/google-tag-manager';
import { GTM_ID } from '@/settings/app_rules';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chatlio-widget': any;
    }
  }
}



const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: metadataSettings.title,
  description: metadataSettings.description,
};


export default async function RootLayout({
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

      <body>{children}

      <Script src="https://js.chatlio.com/widget.js" strategy="lazyOnload" />
      <chatlio-widget widgetid={chatlioWidgetId} disable-favicon-badge></chatlio-widget>

    </body>
    <RefererTracker />
    <GoogleTagManager gtmId={GTM_ID} />
  </html>
  )
}

  );
}



