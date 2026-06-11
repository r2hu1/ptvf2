"use client";

import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HeatmapCalendar } from "./heatmap-calendar";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [data, setData] = useState([
    { date: "2025-01-01", value: 3 },
    { date: "2025-01-02", value: 0 },
    { date: "2025-01-03", value: 8 },
  ]);
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
        <p className="text-sm text-white/70 leading-relaxed font-normal">
          I am a Full-Stack Software Engineer focused on building robust SaaS
          products and microservices. I specialize in designing scalable backend
          architectures, crafting seamless frontend experiences, and automating
          deployments.
        </p>

        <p className="text-sm text-white/70 leading-relaxed font-normal">
          As an active open-source builder, I’ve created over 50 full-stack
          projects and accumulated{" "}
          <strong className="text-white font-medium">550+ stars</strong> across
          GitHub repositories.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button size="sm" variant="default" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume <ArrowUpRight className="size-3.5 ml-1" />
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
                Copied <Check className="size-3.5 ml-1.5" />
              </>
            ) : (
              <>
                Copy Email <Copy className="size-3.5 ml-1.5" />
              </>
            )}
          </Button>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="pt-4">
          <Link
            href="https://github.com/r2hu1"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-scroll"
          >
            <HeatmapCalendar legend={false} data={data} axisLabels />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
