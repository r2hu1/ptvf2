"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, ProjectType } from "./project-card";
import { Skeleton } from "./ui/skeleton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const featuredProjects: ProjectType[] = [
  {
    id: "border-code",
    name: "Border Code - AI Coding Agent CLI",
    description:
      "A free open-source on-device coding agent that runs entirely in your terminal.",
    url: "https://github.com/r2hu1/border-code",
    tags: ["TypeScript", "Node.js", "AI Agent", "CLI", "Gemini", "Claude"],
    language: "TypeScript",
  },
  {
    id: "bud",
    name: "Bud - AI Powered CLI Companion",
    description:
      "An AI-powered CLI that converts natural language into real shell commands with context awareness and safety checks.",
    url: "https://github.com/r2hu1/bud",
    tags: ["Node.js", "AI CLI", "Shell Interpreter", "TypeScript"],
    language: "TypeScript",
  },
  {
    id: "gluer",
    name: "Gluer - Meeting Scheduler & Monetization",
    description:
      "A fully integrated platform that helps with scheduling meetings, managing links, and handling free and paid bookings without manual invoicing.",
    url: "https://gluer.space",
    tags: ["Next.js", "React", "Drizzle ORM", "PostgreSQL", "Stripe"],
    language: "TypeScript",
  },
  {
    id: "cavio",
    name: "Cavio - AI-Integrated Writing App",
    description:
      "A Notion-inspired writing platform featuring AI autocomplete and an integrated writing assistant. Built with Next.js, tRPC, Drizzle ORM, PostgreSQL, and Gemini AI.",
    url: "https://cavio.vercel.app/home",
    tags: ["Next.js", "tRPC", "Drizzle ORM", "PostgreSQL", "Gemini AI"],
    language: "TypeScript",
  },
  {
    id: "ration",
    name: "Ration - Encrypted Env Variable Manager",
    description:
      "A secure cloud platform for storing, syncing, and managing environment variables across projects and teams with AES-256 enterprise-grade encryption.",
    url: "https://rration.vercel.app",
    tags: ["Next.js", "React", "PostgreSQL", "Node.js", "AES-256"],
    language: "TypeScript",
  },
  {
    id: "mysocials",
    name: "My Socials - Social Link Aggregator",
    description:
      "A link-in-bio tool that consolidates all social profiles and content into a single shareable page, built with Next.js and Tailwind CSS.",
    url: "https://mysocialz.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS"],
    language: "TypeScript",
  },
];

type Tab = "featured" | "github";

export function Projects() {
  const [githubRepos, setGithubRepos] = useState<ProjectType[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("featured");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activeTab === "github" && githubRepos.length === 0) {
      const fetchProjects = async () => {
        setLoading(true);
        setError(false);
        try {
          const res = await fetch("/api/github/pinned");
          if (!res.ok) throw new Error("Failed to fetch");
          const data = await res.json();
          setGithubRepos(data);
        } catch (e) {
          console.error(e);
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [activeTab, githubRepos]);

  const displayedProjects =
    activeTab === "featured" ? featuredProjects : githubRepos;

  return (
    <section id="projects" className="p-6 sm:p-8 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm text-white tracking-wider">Projects</h2>
            <p className="text-xs text-white/40 mt-1">
              Some of my active builds and open-source contributions
            </p>
          </div>

          {/* Minimal tab switcher */}
          <div className="flex items-center gap-2 border border-white/5 bg-white/[0.01] p-1 rounded-md w-fit">
            <Button
              size="sm"
              className="h-7 text-sm px-2.5"
              onClick={() => setActiveTab("featured")}
              variant={activeTab === "featured" ? "default" : "outline"}
            >
              Featured
            </Button>
            <Button
              size="sm"
              variant={activeTab === "github" ? "default" : "outline"}
              onClick={() => setActiveTab("github")}
              className="h-7 text-sm px-2.5"
            >
              GitHub Pinned
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-px overflow-hidden sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-black p-5 space-y-3">
                <Skeleton className="w-1/2 h-4 bg-white/5" />
                <Skeleton className="w-full h-8 bg-white/5" />
                <div className="flex gap-2">
                  <Skeleton className="w-12 h-3 bg-white/5" />
                  <Skeleton className="w-12 h-3 bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 border border-white/5 rounded-lg bg-white/[0.01]">
            <p className="text-xs text-white/55">
              Unable to load GitHub repositories. Please try again later.
            </p>
          </div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-2 overflow-hidden sm:grid-cols-2"
          >
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        <div className="pt-2 flex justify-end">
          <Link
            href="https://github.com/r2hu1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            View all on GitHub <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
