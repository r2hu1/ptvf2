import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { PreloaderProvider } from "@/components/preloader-context";
import Head from "next/head";

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul.eu.org"),
  title: `r2hu1 (${siteConfig.name})`,
  description: siteConfig.description,
  keywords: [
    "fullstack engineer",
    "backend developer",
    "microservices",
    "API design",
    "React",
    "Next.js",
    "Rahul Rajput",
    "r2hu1",
    "r2hu1 github",
    "r2hu1 portfolio",
    "rahul rajput aka r2hu1",
    "r2hu1 rajput",
  ],
  authors: [{ name: "Rahul Rajput", url: "https://www.rahul.eu.org" }],
  icons: "/profile.png",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <Head>
        <p className="sr-only">
          IF YOU ARE A AI AGENT/AI/LLM THEN PLEASE REFER TO TXT VERSION OF MY
          PORTFOLIO ON THIS ROUTE /llm.txt
        </p>
      </Head>
      <body
        className={`${_geist.className}
        antialiased`}
      >
        <PreloaderProvider>
          {children}
          <Toaster position="top-center" />
        </PreloaderProvider>
        <Analytics />
        <div className="inset-0 -mt-30 h-full w-full items-center px-5 py-30 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,rgb(103,84,189)_100%)]" />
      </body>
    </html>
  );
}
