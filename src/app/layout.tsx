import './globals.css';
import Header from '@/components/reusables/Header';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Providers from './(root)/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpaceTraders UI',
  description: 'An unofficial SpaceTraders UI',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
