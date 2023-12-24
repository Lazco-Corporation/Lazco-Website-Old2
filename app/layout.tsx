import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from "@radix-ui/themes"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LAZCO STUDIO LTD',
  description: 'Lazco是專業的網站開發和托管團隊，提供全面的數位解決方案。我們秉持規劃、開發和提供的原則，與客戶密切合作，創建出符合需求的定制網站。選擇Lazco，提升您的在線品牌形象。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Theme>{children}</Theme></body>
    </html>
  )
}
