import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZSleep - Transform Your Sleep Quality | Sleep Tracking & Meditation",
  description: "Track your sleep patterns, enjoy guided meditation, and wake up refreshed with ZSleep. Join 500K+ users improving their sleep. Download now for iOS and Android.",
  keywords: "sleep tracking, meditation, sleep app, better sleep, insomnia, sleep quality, sleep monitor",
  authors: [{ name: "KaiTeam" }],
  openGraph: {
    title: "ZSleep - Sleep Tracking & Meditation App",
    description: "Transform your sleep quality with advanced sleep tracking and guided meditation sessions",
    type: "website",
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
      </body>
    </html>
  );
}
