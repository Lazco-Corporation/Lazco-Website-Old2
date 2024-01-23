// Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Radix UI
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Configuration Files
import { themeConf } from "./theme.conf";

// Styles
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lazco Studio Ltd.",
  description: "NaNaNa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme {...themeConf}>{children}</Theme>
      </body>
    </html>
  );
}
