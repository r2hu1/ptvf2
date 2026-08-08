"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { siteConfig } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { usePreloader } from "./preloader-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaEnvelope } from "react-icons/fa";
import ThemeTogglerButtonDemo from "./theme-changer";

const socials: { icon: IconType; url: string; label: string }[] = [
  { icon: FaGithub, url: siteConfig.github, label: "GitHub" },
  { icon: FaLinkedin, url: siteConfig.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, url: siteConfig.twitter, label: "Twitter" },
  { icon: FaDiscord, url: siteConfig.discord, label: "Discord" },
  { icon: FaInstagram, url: siteConfig.instagram, label: "Instagram" },
  { icon: FaEnvelope, url: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Header() {
  const { done } = usePreloader();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={done ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-6 sm:p-8 bg-background"
    >
      <div className="flex gap-4 flex-wrap items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Placeholder to hold space before avatar arrives */}
            <div className="size-11" />

            {/* Avatar only mounts after preloader is done so layoutId can animate in */}
            {done && (
              <motion.img
                layoutId="avatar"
                src="https://github.com/r2hu1.png"
                alt="Rahul Rajput"
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
            <p className="text-xs text-foreground/50 font-medium">
              Software Engineer
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center">
              {socials.slice(0, 3).map((social) => (
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full cursor-pointer -ml-2"
                  key={social.label}
                >
                  <social.icon />
                </Button>
              ))}
            </div>
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
    </motion.header>
  );
}
