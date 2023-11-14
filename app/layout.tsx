import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from './theme';
import { Switcher } from './switcher';
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
      <html lang="en" suppressHydrationWarning>
        <body className={`${nunito.className} bg-[#FAFAFA] dark:bg-[#202C37]`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Switcher />
          {children}
          </ThemeProvider>
          </body>
      </html>
    )
  }