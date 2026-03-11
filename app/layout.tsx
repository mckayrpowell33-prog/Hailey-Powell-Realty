import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Hailey Powell Realty | Boise Real Estate',
  description: 'Sincere Boise-area real estate guidance for buyers and sellers in Boise, Meridian, Eagle, Kuna, and Star.',
  openGraph: {
    title: 'Hailey Powell Realty',
    description: 'Trusted Boise real estate guidance with sincere, no-pressure support.',
    images: ['/logo-primary.svg']
  },
  icons: {
    icon: '/logo-mark.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} bg-white font-sans text-slate-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
