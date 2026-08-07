import type { Metadata, Viewport } from "next";
import { Geist, Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { PreloaderProvider } from "@/components/preloader-context";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const _geist = Geist({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Rajput",
  alternateName: "r2hu1",
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.png`,
  email: "mailto:rrahulrajput2006@gmail.com",
  telephone: "+918108068981",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/r2hu1",
    "https://linkedin.com/in/r2hu1",
    "https://twitter.com/r2hu1",
    "https://instagram.com/r.rah_ul",
    "https://discord.com/users/1088811769977384971",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rahul Rajput (r2hu1) - Fullstack Engineer",
    template: "%s | Rahul Rajput (r2hu1)",
  },
  description: `I'm a software engineer who enjoys building things from scratch. I've worked with startups, built products for clients, and spent years creating my own projects. Most of my time is spent building products, contributing to open source, and experimenting with new ideas. I've built 50+ projects ranging from AI tools and SaaS products to developer tools and automation software, and my open-source work has earned hundreds of GitHub stars.`,
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
    "software engineer india",
    "AI tools developer",
    "SaaS developer",
  ],
  applicationName: "Rahul Rajput (r2hu1)",
  authors: [{ name: "Rahul Rajput", url: siteConfig.url }],
  creator: "Rahul Rajput",
  category: "technology",
  publisher: siteConfig.url,
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "Rahul Rajput",
    locale: "en_US",
    title: "Rahul Rajput (r2hu1)",
    description: `I'm a software engineer who enjoys building things from scratch. I've worked with startups, built products for clients, and spent years creating my own projects. Most of my time is spent building products, contributing to open source, and experimenting with new ideas. I've built 50+ projects ranging from AI tools and SaaS products to developer tools and automation software, and my open-source work has earned hundreds of GitHub stars.`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Rajput (r2hu1)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@r2hu1",
    creator: "@r2hu1",
    title: "Rahul Rajput (r2hu1)",
    description: `I'm a software engineer who enjoys building things from scratch. I've worked with startups, built products for clients, and spent years creating my own projects. Most of my time is spent building products, contributing to open source, and experimenting with new ideas. I've built 50+ projects ranging from AI tools and SaaS products to developer tools and automation software, and my open-source work has earned hundreds of GitHub stars.`,
    images: ["/opengraph-image.png"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
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
      className={cn("font-sans", figtree.variable)}
      // style={{ colorScheme: "dark" }}
    >
      <body
        className={`${_geist.className}
        antialiased`}
      >
        <p className="sr-only">
          If you are an AI agent, AI, or LLM, please refer to the plain-text
          version of this portfolio at https://www.rahul.eu.org/llm.txt
        </p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PreloaderProvider>
            {children}
            <Toaster position="bottom-right" />
          </PreloaderProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
