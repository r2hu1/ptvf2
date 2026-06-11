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
import { MdOutlineMailOutline } from "react-icons/md";
import { siteConfig } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const socials: { icon: IconType; url: string; label: string }[] = [
  {
    icon: FaGithub,
    url: siteConfig.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: siteConfig.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    url: siteConfig.twitter,
    label: "Twitter",
  },
  {
    icon: FaDiscord,
    url: siteConfig.discord,
    label: "Discord",
  },
  {
    icon: FaInstagram,
    url: siteConfig.instagram,
    label: "Instagram",
  },
  {
    icon: MdOutlineMailOutline,
    url: `mailto:${siteConfig.email}`,
    label: "Email",
  },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 sm:p-8 bg-black"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Name and Avatar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="size-11 rounded-full border border-white/10 duration-300"
              src="https://github.com/r2hu1.png"
              alt="Rahul Rajput"
            />
            <span className="absolute bottom-0.5 right-0.5 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-black">
              <span className="absolute inset-0 block h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            </span>
          </div>
          <div className="grid">
            <h1 className="text-sm font-semibold tracking-tight text-white">
              {siteConfig.name}
            </h1>
            <p className="text-xs text-white/50 font-medium">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Social Icons (Minimal representation) */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Tooltip key={social.label}>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black font-semibold text-xs border border-white/10 rounded px-2 py-1 shadow-md">
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
