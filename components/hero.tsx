"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink, MailPlus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";
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
          You can explore my works, or reach out to me anytime.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="border-primary/15"
          >
            <Link href="/resume-jan-2026.pdf" target="_blank">
              <ExternalLink className="size-3.5 text-muted-foreground" />
              Resume
            </Link>
          </Button>
          <Tooltip>
            <TooltipTrigger>
              <Button className="border-0" size="sm" asChild>
                <Link target="_blank" href={`mailto:${siteConfig.email}`}>
                  Lets Talk <MailPlus />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>{siteConfig.email}</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Link target="_blank" href="https://github.com/r2hu1">
        <img
          src="https://ghchart.rshah.org/r2hu1"
          alt="GitHub contribution graph"
          className="w-full rounded-md invert mt-12 select-none"
        />
      </Link>
    </motion.div>
  );
}
