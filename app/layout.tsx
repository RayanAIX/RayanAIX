import type { Metadata } from "next";
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Rayan Shahid — Cognitive Learning Systems & AI Assessment",
  description: "I help EdTech platforms measure real understanding, not just correctness. Independent AI researcher (HCMS, DOI:10.5281/zenodo.18269740). Built UnderstandIQ — confidence calibration, misconception detection, cognitive archetypes.",
  keywords: [
    "Muhammad Rayan Shahid", "RayanAIX", "ByteBrilliance AI",
    "cognitive learning systems", "AI assessment", "EdTech AI", "learning analytics",
    "confidence calibration AI", "misconception detection", "UnderstandIQ",
    "HCMS cognitive AI", "AI researcher 16", "EdTech freelancer",
    "learning measurement AI", "metacognition AI", "assessment systems Pakistan"
  ],
  openGraph: {
    title: "Muhammad Rayan Shahid — Cognitive Learning Systems & AI Assessment",
    description: "I help EdTech platforms measure real understanding, not just correctness. Published researcher. Live system. Available for projects.",
    url: "https://muhammadrayanshahid.vercel.app",
    type: "website",
    siteName: "Muhammad Rayan Shahid",
  },
  authors: [{ name: "Muhammad Rayan Shahid" }],
  creator: "Muhammad Rayan Shahid",
  publisher: "Muhammad Rayan Shahid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body className="bg-primary text-primary antialiased selection:bg-accent-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
