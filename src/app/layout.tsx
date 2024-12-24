import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Web Developer',
  description: 'Professional web developer specializing in custom solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

