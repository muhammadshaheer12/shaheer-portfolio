import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaheer Website",
  description:
    "Muhammad Shaheer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="temp-layout">
            <ThemeSwitch />
            <Sidebar />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
