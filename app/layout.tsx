import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import "./../styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guia Histológico',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
