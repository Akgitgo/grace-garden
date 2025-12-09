import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* --- Canonical favicon + PWA manifest (Grace Garden) --- */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* --- Canonical Open Graph / Twitter image (single source) --- */}
        <meta property="og:image" content="https://gracegarden.co.in/site-icon-512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Grace Garden Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://gracegarden.co.in/site-icon-512.png" />
      </head>
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
