import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul.eu.org"),
  title: siteConfig.name,
  description: siteConfig.description,
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
    <html lang="en">
      <body className={`${_geist.className} antialiased`}>
        <main className="px-4 py-5">{children}</main>
        <div className="inset-0 -mt-16 h-full w-full items-center px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#63e_100%)]"></div>
      </body>
    </html>
  );
}
