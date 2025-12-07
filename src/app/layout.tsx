import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Garden - Elder Care in Wayanad",
  description: "Grace Garden provides compassionate assisted living and home care for your loved ones in Wayanad.",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.gracegarden.co.in',
    siteName: 'Grace Garden',
    title: 'Grace Garden - Elder Care in Wayanad',
    description: 'Grace Garden provides compassionate assisted living and home care for your loved ones in Wayanad.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
