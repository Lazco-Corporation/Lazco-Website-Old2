// Global Styles
import '@/app/globals.css';

// Next.js
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Third-party Modules
import { Theme } from '@radix-ui/themes';

// Components
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Theme accentColor="blue" radius="large">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'LAZCO STUDIO LTD',
  description: 'Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。',
};