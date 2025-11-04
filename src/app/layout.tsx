import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend developer',
  description: "Loren Lee's personal site",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="/css/font.css" />
      <link rel="icon" href="/image/favicon/favicon.ico" />
      <meta
        name="google-adsense-account"
        content="ca-pub-7038308567914787"
      />
    </head>
    <body>
    {/* Microsoft Clarity script */}
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "u0tmhgjuua");`}
    </Script>

    {children}
    </body>
    </html>
  )
}
