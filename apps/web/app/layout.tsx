import type { Metadata } from 'next';
import { Cormorant, Libre_Franklin } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-libre-franklin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Museo Archeologico Comunale di Segni',
  description:
    'Dal 2001 il Museo Archeologico Comunale di Segni valorizza il patrimonio antico e medievale della città, unendo gli itinerari interni ai percorsi esterni di una vera e propria città-museo.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${libreFranklin.variable}`}>
      <body className="min-h-screen bg-museum-dark text-white font-body flex flex-col pb-16 lg:pb-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
