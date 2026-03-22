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
      className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-0 -mt-5"
    >
      <div className="space-y-2">
        <h1 className="text-muted-foreground">
          Hi, I'm {siteConfig.name}, a fullstack engineer based in india. You
          can explore my works, or reach out to me anytime.
        </h1>
        <div className="mt-5 flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="border-primary/15"
          >
            <Link href="/r/resume.pdf" target="_blank">
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
      <Link
        href="https://github.com/r2hu1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 block w-full overflow-x-auto"
      >
        <div className="min-w-[600px] sm:min-w-full">
          <img
            src="/api/github/stats"
            alt="GitHub contribution graph"
            width={1200}
            height={300}
            className="select-none rounded-md invert"
          />
        </div>
      </Link>
    </motion.div>
  );
}
