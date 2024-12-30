import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Web Developer',
  description: 'Professional web developer specializing in custom solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Script para Google Translate */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en' },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
          defer
        ></script>
      </head>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        <Header />
        {/* Contenedor para Google Translate */}
        <div id="google_translate_element" className="hidden"></div>
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
