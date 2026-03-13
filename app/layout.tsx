import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Quintela Group - Cycling & Home Solutions',
  description: 'Quintela Cycling and Casa Quintela - Premium services for cyclists and home improvement professionals',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
    viewportFit: 'cover',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Adicionamos 'bg-black' aqui para garantir que o fundo seja preto 
    // mesmo antes de qualquer página carregar.
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-black`}>
      <body className="font-sans antialiased bg-black text-white selection:bg-[#CDFF00] selection:text-black">
        {/* O 'bg-black' no body garante que, se a página demorar 1ms 
          a carregar, o utilizador vê preto e não branco.
        */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
