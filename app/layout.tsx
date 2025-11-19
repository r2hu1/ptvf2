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
			<body className={`${_geist.className} antialiased px-6 py-5`}>{children}</body>
		</html>
	);
}
