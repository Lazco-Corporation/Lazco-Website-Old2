// Next
import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";

// Radix UI
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Configuration Files
import { themeConf } from "./theme.conf";

// Styles
import "@/styles/globals.scss";

const notoSansTC = Noto_Sans_TC({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
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
      <body className={notoSansTC.className}>
        <Theme {...themeConf}>{children}</Theme>
      </body>
    </html>
  );
}
