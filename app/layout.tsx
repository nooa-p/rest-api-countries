import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito_Sans({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Countries through REST API | Frontend Mentor',
  description: 'Solution for a Frontend Mentor challenge'
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={nunito.className}>{children}</body>
      </html>
    )
  }