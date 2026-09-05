"use client";

import { FaDiscord } from "react-icons/fa";
import { PullCord } from "./pull-cord";
import ThemeToggler from "./theme-changer";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const DISCORD_LINK = "https://discord.gg/BVxbG3QDh";

export function Footer() {
  const copyLink = async () => {
    await navigator.clipboard.writeText(DISCORD_LINK);
    toast.success("Copied Discord invite link to clipboard!");
  };

  return (
    <div className="p-6 sm:p-8 py-0! -mt-5">
      <footer className="flex items-center bg-secondary justify-between gap-4 rounded-xl border p-4">
        <div className="min-w-0">
          <h1 className="text-sm font-medium">Social Hub</h1>
          <p className="mt-0.5 text-xs text-muted-foreground">
            A chill space for builders, founders & vibe coders.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="icon-sm"
            variant="secondary"
            onClick={copyLink}
            aria-label="Copy Discord invite"
            className="cursor-pointer"
          >
            <Copy />
          </Button>

          <Button asChild size="sm" className="gap-2">
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
              Join <FaDiscord />
            </a>
          </Button>
        </div>
      </footer>

      <ThemeToggler
        variant="default"
        size="default"
        direction="rtl"
        system={false}
      />

      <PullCord />
    </div>
  );
}
