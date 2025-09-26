import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zayd El Ajli - Portfolio & Blog',
  description: 'Portfolio et blog personnel de Zayd El Ajli, développeur en formation spécialisé en IA et transformation digitale',
  keywords: 'Zayd El Ajli, développeur, intelligence artificielle, portfolio, blog, informatique, Cogiphi',
  authors: [{ name: 'Zayd El Ajli' }],
  openGraph: {
    title: 'Zayd El Ajli - Portfolio & Blog',
    description: 'Développeur en formation spécialisé en IA et transformation digitale',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
