import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-28aaeeb5.vercel.app"),
  title: "Aurora AI | Intelligent Systems Studio",
  description:
    "Aurora AI builds trustworthy, human-centered AI systems that elevate teams, amplify creativity, and accelerate innovation.",
  openGraph: {
    title: "Aurora AI | Intelligent Systems Studio",
    description:
      "Human-centered AI platforms for product teams, creators, and enterprises.",
    url: "https://agentic-28aaeeb5.vercel.app",
    siteName: "Aurora AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aurora AI platform preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora AI | Intelligent Systems Studio",
    description:
      "Human-centered AI platforms for product teams, creators, and enterprises.",
    site: "@auroraAI"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-charcoal text-slate-100 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-grid-radial opacity-80" />
          <div className="absolute inset-x-0 top-[-20%] mx-auto h-[40rem] w-[40rem] rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute inset-x-1/2 top-[10%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky/10 blur-3xl" />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
