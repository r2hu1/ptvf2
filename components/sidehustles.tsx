"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
    image: "/qpay.png",
  },
  {
    id: "meero",
    name: "Meero",
    description:
      "AI app builder that turns prompts into full-stack web apps, then monitors and improves them after launch.",
    url: "https://meero.im",
    image: "/meero.png",
  },
  {
    id: "roster-pro",
    name: "RosterPro",
    description:
      "Restaurant operating system for QR ordering, table management, billing, kitchen display, and analytics.",
    url: "https://rosterpro.in",
    image: "/roster-pro.png",
  },
  {
    id: "gluer-space",
    name: "Gluer Space",
    description:
      "All-in-one profile for managing links, scheduling meetings, and accepting free or paid bookings.",
    url: "https://gluer.space",
    image: "/gluer-space.png",
  },
];

export function SideHustles() {
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
          className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-xl border border-border"
        >
          {sideHustlesData.map((app) => (
            <motion.a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden bg-background transition-colors duration-200 hover:bg-secondary/50
                border-b border-border
                sm:[&:nth-child(odd)]:border-r
                sm:[&:nth-last-child(-n+2)]:border-b-0
                [&:last-child]:border-b-0"
            >
              {/* Edge-to-edge Thumbnail Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-secondary/20 border-b border-border/40">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  // sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
