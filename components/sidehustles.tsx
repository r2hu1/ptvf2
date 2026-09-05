"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface SideHustleApp {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
}

const sideHustlesData: SideHustleApp[] = [
  {
    id: "qupay",
    name: "QuPay",
    description:
      "One payment link to accept cards, digital wallets, and crypto payments from anywhere in the world.",
    url: "https://qupay.me",
    image: "/qpay.webp",
  },
  {
    id: "meero",
    name: "Meero",
    description:
      "AI app builder that turns prompts into full-stack web apps, then monitors and improves them after launch.",
    url: "https://meero.im",
    image: "/meero.webp",
  },
  {
    id: "roster-pro",
    name: "RosterPro",
    description:
      "Restaurant operating system for QR ordering, table management, billing, kitchen display, and analytics.",
    url: "https://rosterpro.in",
    image: "/roster-pro.webp",
  },
  {
    id: "gluer-space",
    name: "Gluer Space",
    description:
      "All-in-one profile for managing links, scheduling meetings, and accepting free or paid bookings.",
    url: "https://gluer.space",
    image: "/gluer-space.webp",
  },
];

export function SideHustles() {
  const [activeStackIndex, setActiveStackIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 640) {
        setActiveStackIndex(null);
        return;
      }

      const fontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      let highestStickyIndex: number | null = null;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const expectedStickyTop = (4.5 + i * 1.5) * fontSize;

        if (
          rect.top <= expectedStickyTop + 12 &&
          rect.bottom > expectedStickyTop + 20
        ) {
          highestStickyIndex = i;
        }
      });

      setActiveStackIndex(highestStickyIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="sidehustles" className="p-6 sm:p-8 bg-background py-0!">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm text-foreground font-medium tracking-wider">
              Few Side-Hustles
            </h2>
            <p className="text-xs text-foreground/60 mt-1">
              Some of the commercial apps i{"'"}ve built on the side.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-0 sm:rounded-xl sm:border sm:border-border sm:overflow-hidden"
        >
          {sideHustlesData.map((app, index) => {
            const isTopStacked = activeStackIndex === index;

            return (
              <motion.a
                key={app.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  top: `calc(4.5rem + ${index * 1.5}rem)`,
                }}
                className="group relative block overflow-hidden bg-background transition-colors duration-200 hover:bg-secondary/50
                  sticky sm:static
                  rounded-xl sm:rounded-none
                  border border-border sm:border-0
                  sm:border-b sm:border-border
                  sm:[&:nth-child(odd)]:border-r
                  sm:[&:nth-last-child(-n+2)]:border-b-0
                  sm:[&:last-child]:border-b-0"
              >
                {/* Edge-to-edge Thumbnail Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/20 border-b border-border/40">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    // sizes="(max-width: 640px) 100vw, 50vw"
                    className={cn(
                      "object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0",
                      isTopStacked ? "grayscale-0!" : "grayscale"
                    )}
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-medium text-foreground">
                      {app.name}
                    </h3>
                    <ArrowUpRight className="size-3.5 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>

                  <p className="mt-1.5 line-clamp-2 text-xs font-normal leading-relaxed text-foreground/60">
                    {app.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
