'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import './globals.css'
import Header from './components/layout/header'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtag from '@/lib/gtag'
import { metadata } from './metadata'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`
    gtag.pageview(url)
  }, [pathname, searchParams])

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased bg-gray-100 dark:bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}