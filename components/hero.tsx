"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HeatmapCalendar } from "./heatmap-calendar";
import { Underline } from "./underline";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Email copied to clipboard!");
  };

  const [data, setData] = useState<{ date: string; value: number }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/github/cont");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="p-6 sm:p-8 -mt-4 bg-black"
    >
      <div className="space-y-6">
        <p className="text-[14.5px] text-white/70 leading-relaxed font-normal">
          I'm a software engineer who enjoys building things from scratch. I've
          worked with <Underline>startups</Underline>, built products for{" "}
          <Underline>clients</Underline>, and spent years creating my own
          projects. Most of my time is spent building products, contributing to
          open source, and experimenting with new ideas. I've built{" "}
          <Underline>50+ projects</Underline> ranging from AI tools and SaaS
          products to developer tools and automation software, and my
          open-source work has earned{" "}
          <Underline>hundreds of GitHub stars.</Underline>
        </p>

        <p className="text-[14.5px] text-white/70 leading-relaxed font-normal">
          When I'm not working, I'm usually shipping another side project or
          contributing to projects I use myself.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button size="sm" variant="default" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>

          <Button
            size="sm"
            className="cursor-pointer"
            variant="outline"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                Copied <Check className="size-3.5" />
              </>
            ) : (
              <>
                Copy Email <Copy className="size-3.5 ml-1.5" />
              </>
            )}
          </Button>
        </div>

        {/* GitHub Contribution Graph */}
        <ScrollArea className="py-6 -mb-6">
          <Link
            href="https://github.com/r2hu1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeatmapCalendar legend={false} data={data} />
          </Link>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </motion.section>
  );
}
