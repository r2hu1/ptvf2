"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-4"
		>
			<div className="space-y-2">
				<h1 className="text-muted-foreground">
					Hi, I'm {siteConfig.name}, a self-taught developer who just really
					enjoys building things.
				</h1>
				<p className="text-muted-foreground">
					I make products that don’t break, scale when they should, and look
					clean without trying too hard. Full-stack is where I’m most at
					home—straightforward APIs, stable backend foundations, and interfaces
					that feel smooth instead of flashy.
				</p>
				<p className="text-muted-foreground">
					You can check out my{" "}
					<a href="/resume.pdf" className="underline text-foreground/80">
						resume
						<ExternalLink className="inline-block size-4! ml-1" />
					</a>{" "}
					for more of my work, or reach me anytime at{" "}
					<a
						className="underline text-foreground/80"
						href={`mailto:${siteConfig.email}`}
					>
						my email.
						<ExternalLink className="inline-block size-4! ml-1" />
					</a>
					.
				</p>
			</div>
		</motion.div>
	);
}
