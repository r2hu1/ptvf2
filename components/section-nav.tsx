"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "sidehustles", label: "Side Hustles" },
  { id: "projects", label: "Projects" },
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection("about");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i].id;
        if (sectionId === "about") continue;

        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Page navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 select-none"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-2.5 py-1 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Label (fades in on hover or when active) */}
            <span
              className={cn(
                "text-[10px] font-medium tracking-wide transition-all duration-200 pointer-events-none",
                isActive
                  ? "text-foreground opacity-100 translate-x-0"
                  : "text-foreground/50 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0",
              )}
            >
              {section.label}
            </span>

            {/* Dash indicator */}
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                isActive
                  ? "w-6 h-[2px] bg-foreground opacity-100"
                  : "w-4 h-[2px] bg-foreground/25 group-hover:bg-foreground/60 group-hover:w-5",
              )}
            />
          </button>
        );
      })}
    </aside>
  );
}
