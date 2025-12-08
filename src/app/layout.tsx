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
  title: "Grace Garden - Professional Elder Care & Assisted Living in Wayanad, Kerala",
  description: "Grace Garden offers compassionate assisted living and home care services for seniors in Wayanad, Kerala. 24/7 medical care, nutritious meals, cultural activities, and comfortable accommodation options in a serene environment.",
  keywords: ["elder care Wayanad", "assisted living Kerala", "senior care Wayanad", "old age home Kerala", "home care services Wayanad", "elderly care facility", "retirement home Kerala", "Grace Garden"],
  authors: [{ name: "Grace Garden" }],
  creator: "Grace Garden",
  publisher: "Grace Garden",
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gracegarden.co.in',
    siteName: 'Grace Garden',
    title: 'Grace Garden - Professional Elder Care & Assisted Living in Wayanad',
    description: 'Compassionate assisted living and home care services for seniors in Wayanad, Kerala. 24/7 medical care, nutritious meals, and vibrant community lifestyle.',
    images: [
      {
        url: 'https://gracegarden.co.in/site-icon-512.png',
        width: 512,
        height: 512,
        alt: 'Grace Garden Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grace Garden - Elder Care in Wayanad',
    description: 'Professional assisted living and home care services for seniors in Wayanad, Kerala.',
    images: ['https://gracegarden.co.in/site-icon-512.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
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
