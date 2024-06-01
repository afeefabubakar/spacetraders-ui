import type { Metadata } from "next";
import { Kode_Mono } from 'next/font/google';
import './globals.css';

const kodeMono = Kode_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spacetraders UI',
  description:
    'An unofficial UI made by Afeef for Spacetraders, an API-based game.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={kodeMono.className}>{children}</body>
    </html>
  );
}
