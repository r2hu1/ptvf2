"use client";
import { motion } from "framer-motion";
import { CardType, WorkingCard } from "./working-card";

const data = [
  {
    name: "Open-Source Developer",
    position: "Github",
    description: `I also love contributing to open source! I've built a bunch of open-source projects myself from
      web apps, apis, micro apps to backend systems and even some Al stuff. Plus, I've contributed
      to several other open-source projects along the way.`,
    start_date: "2022",
  },
  {
    name: "Tayst AI",
    position: "Founding Engineer",
    description: `As a Founding Engineer at Tayst, a U.S.-based startup, I'm building the company's scalable
    backend and microservices infrastructure, while also contributing to the frontend to deliver a
    seamless user experience.`,
    start_date: "17/09/2025",
    end_date: "17/11/2025",
    promotion: {
      title: "Tech Lead",
      description: `I'm responsible for leading the development of the company's backend, frontend and
      microservices infrastructure, ensuring scalability and reliability.`,
      start_date: "17/11/2025",
      end_date: "15/03/2026",
    },
  },
  {
    name: "Portals",
    position: "Frontend Developer",
    description: `Built and maintained all dynamic pages for the startup's web platform using Next.js, React,
    TypeScript, and Tailwind CSS. Focused on creating responsive, high-performance Uls and
    integrating APIs to deliver a smooth user experience. Collaborated directly with the founding
    team on product features and frontend architecture.`,
    start_date: "04/03/25",
    end_date: "03/06/25",
  },
];

export default function WorkingExperience() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-sm text-foreground/90 grid gap-0.5 font-medium">
          Experience
          <span className="text-xs text-muted-foreground">
            Professional Working Experience.
          </span>
        </div>
        {data.map((item, index) => (
          <WorkingCard key={item.name} data={item as CardType} />
        ))}
      </motion.div>
    </section>
  );
}
