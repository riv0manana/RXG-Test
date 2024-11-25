/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';


export async function generateMetadata() {
  const app = await getTranslations('Common.app');
  const t = await getTranslations('Public.Home');

  const title = t('pageTitle', { appName: app('name') });

  return {
    title,
    description: t('pageDescription'),
    openGraph: {
      type: "website",
      url: app('url'),
      title,
      description: t('pageDescription'),
      siteName: app('name'),
      images: [{
        url: `${app('url')}/og.png`,
      }],
    },
    authors: {
      name: "riv0manana | Rivomanana MANDANIAINA",
      url: "https://riv0manana.dev",
    },
    keywords: t('keywords').split(', '),
  } as Metadata
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={` antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
