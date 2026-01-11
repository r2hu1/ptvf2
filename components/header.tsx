"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "./ui/button";
import { IconType } from "react-icons/lib";
import { MdOutlineMailOutline } from "react-icons/md";
import { siteConfig } from "@/lib/constants";
import { ButtonGroup } from "./ui/button-group";

const socials: { icon: IconType; url: string; label: string }[] = [
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
    icon: FaGithub,
    url: siteConfig.github,
    label: "GitHub",
  },
  {
    icon: MdOutlineMailOutline,
    url: `mailto:${siteConfig.email}`,
    label: "Email",
  },
  {
    icon: FaLinkedin,
    url: siteConfig.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    url: siteConfig.instagram,
    label: "Instagram",
  },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center flex-wrap gap-6 justify-between max-w-2xl mx-auto px-4 pt-6 sm:py-16 pb-10 sm:px-6 lg:px-8"
    >
      <div className="items-center gap-4 flex">
        <div className="h-fit w-fit bg-secondary rounded-full p-1">
          <img
            className="size-10 rounded-full"
            src="https://github.com/r2hu1.png"
          />
        </div>
        <div className="grid">
          <h1>Rahul Rajput</h1>
          <p className="text-sm text-muted-foreground">Fullstack Engineer</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ButtonGroup>
          {socials.map((social) => (
            <Button variant="outline" key={social.label} asChild size="icon-sm">
              <Link href={social.url} target="_blank">
                <social.icon />
              </Link>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </motion.header>
  );
}
