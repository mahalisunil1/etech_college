import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialDock from "./components/SocialDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eTech Residential College",
  description: "Experience an innovative curriculum and world-class infrastructure designed to unlock every student's true potential at eTech Residential College.",
  icons: {
    icon: "/images/landing/logo1.webp",
  },
  openGraph: {
    title: "eTech Residential College",
    description: "Experience an innovative curriculum and world-class infrastructure designed to unlock every student's true potential.",
    url: "https://etech.edu.in",
    siteName: "eTech Residential College",
    images: [
      {
        url: "/images/landing/landing-hero-bg-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "eTech College Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eTech Residential College",
    description: "Experience an innovative curriculum and world-class infrastructure designed to unlock every student's true potential.",
    images: ["/images/landing/landing-hero-bg-hero-bg.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <SocialDock />
        {children}
        <Footer />
      </body>
    </html>
  );
}
