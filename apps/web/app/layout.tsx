import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Font variabili (subset latin) inclusi nel repo invece di next/font/google:
// il build su Hostinger non riesce a scaricarli da Google durante la build.
const cormorant = localFont({
  src: [
    { path: './fonts/cormorant-latin.woff2', weight: '400 700', style: 'normal' },
    { path: './fonts/cormorant-italic-latin.woff2', weight: '400 700', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
});

const libreFranklin = localFont({
  src: [{ path: './fonts/libre-franklin-latin.woff2', weight: '300 700', style: 'normal' }],
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
