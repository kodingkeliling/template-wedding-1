import type { Metadata } from 'next'
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google'
import './globals.css'
import { getCoupleDisplayName } from '@/config/global'
import { MessagesProvider } from '@/context/MessagesContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: `${getCoupleDisplayName()} - Wedding Invitation`,
  description: `Undangan pernikahan ${getCoupleDisplayName()}. Selasa, 01 April 2025`,
  keywords: `wedding, invitation, pernikahan, undangan, ${getCoupleDisplayName()}`,
  authors: [{ name: getCoupleDisplayName() }],
  openGraph: {
    title: `${getCoupleDisplayName()} - Wedding Invitation`,
    description: `Undangan pernikahan ${getCoupleDisplayName()}. Selasa, 01 April 2025`,
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${getCoupleDisplayName()} - Wedding Invitation`,
    description: `Undangan pernikahan ${getCoupleDisplayName()}. Selasa, 01 April 2025`,
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <MessagesProvider>
          {children}
        </MessagesProvider>
      </body>
    </html>
  )
}
