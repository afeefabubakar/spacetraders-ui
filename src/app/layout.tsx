import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpaceTraders UI',
  description: 'An unofficial SpaceTraders UI',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
