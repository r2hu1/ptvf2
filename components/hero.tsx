"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
          Hi, I'm {siteConfig.name}, a self-taught developer who genuinely
          enjoys building things.
        </h1>
        <p className="text-muted-foreground">
          I focus on creating products that are reliable, scale when they need
          to, and look clean without trying too hard. Full-stack development is
          where I’m most comfortable: clear APIs, solid backend foundations, and
          interfaces that feel smooth rather than flashy.
        </p>
        <p className="text-muted-foreground">
          You can explore my work in{" "}
          <a href="/resume.pdf" className="text-foreground">
            my resume
            <ExternalLink className="inline-block size-3.5! ml-1" />
          </a>{" "}
          , or reach out to me anytime.
        </p>
      </div>
    </motion.div>
  );
}
