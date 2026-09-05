"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { siteConfig } from "@/lib/constants";
import { usePreloader } from "./preloader-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const socials: { icon: IconType; url: string; label: string }[] = [
  { icon: FaGithub, url: siteConfig.links.github, label: "GitHub" },
  { icon: FaLinkedin, url: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, url: siteConfig.links.twitter, label: "Twitter" },
  { icon: FaDiscord, url: siteConfig.links.discord, label: "Discord" },
  { icon: FaInstagram, url: siteConfig.links.instagram, label: "Instagram" },
  {
    icon: FaEnvelope,
    url: `mailto:${siteConfig.contact.email}`,
    label: "Email",
  },
];

export function Header() {
  const { done } = usePreloader();
  const { resolvedTheme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "d" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement)?.tagName,
        ) &&
        !(e.target as HTMLElement)?.isContentEditable
      ) {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resolvedTheme, setTheme]);

  const targetTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <motion.header
      id="header"
      initial={{ opacity: 0 }}
      animate={done ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 sm:p-8 py-0! bg-background cursor-pointer"
    >
      <div className="flex gap-4 flex-wrap items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-11" />

            {done && (
              <motion.img
                layoutId="avatar"
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="absolute inset-0 size-11 rounded-full! border border-background/10"
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              />
            )}

            <span className="absolute bottom-0.5 right-0.5 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-background">
              <span className="absolute inset-0 block h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
          </div>

          <div className="grid">
            <h1 className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </h1>
            <p className="text-xs text-foreground/70 font-medium h-5 flex items-center">
              <AnimatePresence mode="wait">
                {isHovered && mounted ? (
                  <motion.span
                    key="theme-hint"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="text-foreground/80 font-normal"
                  >
                    press <span className="bg-muted p-px px-1 rounded">d</span>{" "}
                    for {targetTheme} mode
                  </motion.span>
                ) : (
                  <motion.span
                    key="job-title"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    {siteConfig.jobTitle}
                  </motion.span>
                )}
              </AnimatePresence>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open social links"
                className="flex items-center cursor-pointer"
              >
                {socials.slice(0, 3).map((social) => (
                  <span
                    key={social.label}
                    aria-hidden="true"
                    className="flex size-9 -ml-2 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all cursor-pointer first:ml-0 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] [&_svg]:size-4"
                  >
                    <social.icon />
                  </span>
                ))}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-50">
              {socials.map((e) => (
                <Link href={e.url} target="_blank" key={e.label}>
                  <DropdownMenuItem className="cursor-pointer">
                    <e.icon />
                    {e.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}
