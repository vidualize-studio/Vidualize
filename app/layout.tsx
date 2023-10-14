import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Vidualize',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale= 1" />
        {/* Other meta tags, title, and external styles/scripts */}
      </Head>
      <body className="font-'Big Shoulders Display'">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
