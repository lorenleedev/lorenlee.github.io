import type { Metadata } from 'next'
import './globals.css';
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
        <meta name="google-adsense-account" content="ca-pub-7038308567914787">
      </head>
      <body>{children}</body>
    </html>
  )
}

