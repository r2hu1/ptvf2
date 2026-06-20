import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { PreloaderProvider } from "@/components/preloader-context";

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
      <body
        className={`${_geist.className}
        antialiased`}
      >
        <PreloaderProvider>
          {children}
          <Toaster position="top-center" />
        </PreloaderProvider>
        <Analytics />
      </body>
    </html>
  );
}
