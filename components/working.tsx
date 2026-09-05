"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { TaystAIIcon } from "@/components/icons/tayst-ai";
import { PortalsIcon } from "@/components/icons/portals";
import { RosterProIcon } from "@/components/icons/roster-pro";

interface RoleDetails {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

const experienceData: RoleDetails[] = [
  {
    company: "RosterPro",
    title: "Founding Engineer",
    location: "India, Mumbai",
    type: "On-site",
    period: "May 2026 – Present",
    bullets: [
      "Architected and built a type-safe, full-stack monorepo powering multiple web applications, backend services, APIs, and shared packages.",
      "Engineered scalable backend infrastructure with authentication, payments, real-time event streaming, caching, media management, and secure QR-based ordering workflows.",
      "Established end-to-end type safety by building shared API contracts, reusable UI components, and schema-first development workflows across the entire stack.",
      "Drove technical architecture, infrastructure, and product development with a strong focus on scalability, performance, reliability, and developer experience.",
    ],
    icon: RosterProIcon,
  },
  {
    company: "Tayst AI",
    title: "Software Engineer (TL)",
    location: "New York, NY",
    type: "Remote",
    period: "Dec 2025 – May 2026",
    bullets: [
      "Led architecture and delivery of the company’s entire backend, frontend, and microservices stack, ensuring system reliability and horizontal scalability across production environments.",
      "Defined engineering standards, reviewed pull requests, and mentored junior contributors while driving adoption of type-safe API patterns to reduce runtime errors.",
      "Coordinated directly with US-based stakeholders to translate product requirements into technical roadmaps and shipped features on aggressive timelines.",
      "Owned deployment pipelines and infrastructure configuration on Vercel and serverless environments, maintaining high uptime for paying customers.",
    ],
    icon: TaystAIIcon,
  },
  {
    company: "Tayst AI",
    title: "Founding Engineer",
    location: "New York, NY",
    type: "Remote",
    period: "Sept 2025 – Nov 2025",
    bullets: [
      "Joined as a founding engineer and built the company’s scalable backend and microservices infrastructure from the ground up.",
      "Contributed to the frontend in Next.js and React, delivering core product UI flows and integrating backend APIs to create a seamless end-to-end user experience.",
      "Established database schema, authentication flows, and API contracts early in the product lifecycle, enabling rapid iteration.",
    ],
    icon: TaystAIIcon,
  },
  {
    company: "Portals",
    title: "Frontend Developer",
    location: "London, UK",
    type: "Remote",
    period: "Mar 2025 – June 2025",
    bullets: [
      "Built and maintained all dynamic pages for the startup’s web platform using Next.js, React, TypeScript, and Tailwind CSS, delivering a responsive and performant UI.",
      "Integrated third-party and internal REST APIs, handling edge cases and loading states to ensure a smooth user experience across devices.",
      "Collaborated directly with the founding team on product features and frontend architecture decisions, iterating quickly based on user feedback.",
    ],
    icon: PortalsIcon,
  },
];

export default function WorkingExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default expand the first one

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="p-6 sm:p-8 py-0! bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-sm text-foreground font-medium tracking-wider">
            Experience
          </h2>
          <p className="text-xs text-foreground/60 mt-1">
            Professional timeline and work achievements
          </p>
        </div>

        <div className="relative border-l border-border pt-1 pl-5.5 ml-1.5 space-y-8">
          {experienceData.map((role, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={`${role.company}-${role.period}`}
                className="relative group"
              >
                <div
                  className={`absolute -left-[30px] top-1.5 size-3.5 rounded-full border border-foreground/10 bg-background transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? "border-border scale-110"
                      : "group-hover:border-foreground/30"
                  }`}
                >
                  <div
                    className={`size-1.5 rounded-full bg-foreground transition-all duration-300 ${
                      isExpanded
                        ? "opacity-100 scale-100"
                        : "opacity-30 scale-75"
                    }`}
                  />
                </div>

                <div
                  onClick={() => toggleExpand(idx)}
                  className="cursor-pointer space-y-1.5 p-4 -m-4 -ml-3 rounded-lg hover:bg-secondary/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {role.icon && (
                        <role.icon
                          className={isExpanded ? "grayscale-0" : undefined}
                        />
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-foreground">
                          {role.company}
                        </h3>
                        <p className="text-xs text-foreground/70 font-normal mt-0.5">
                          {role.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0 text-right">
                      <span className="text-[10px] text-foreground/60 flex items-center gap-1">
                        <Calendar className="size-2.5" /> {role.period}
                      </span>
                      <span className="text-[9px] bg-transparent text-foreground/70 px-1.5 py-0.5 rounded border border-border">
                        {role.type}, {role.location}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pt-2"
                      >
                        <ul className="space-y-2.5 pt-1 mt-1">
                          {role.bullets.map((bullet, bIdx) => (
                            <li
                              key={`${role.company}-${role.period}-${bIdx}`}
                              className="text-xs text-foreground/60 leading-relaxed list-none pl-3 relative"
                            >
                              <span className="absolute left-0 top-2 size-1 rounded-full bg-foreground/30" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
