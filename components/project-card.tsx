"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export interface ProjectType {
  id: string | number;
  name: string;
  description: string | null;
  url: string;
  stargazers_count?: number;
  language?: string | null;
  tags?: string[];
}

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-md border bg-background hover:bg-white/[0.02] p-5 transition-all duration-300 relative overflow-hidden"
    >
      <div className="space-y-3">
        {/* Title and external link icon */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm capitalize font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-200">
            {project.name}
          </h3>
          <ArrowUpRight className="size-3.5 text-foreground/30 group-hover:text-foreground/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5" />
        </div>

        {/* Description */}
        {project.description && (
          <p className="text-xs text-foreground/60 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>
        )}

        {/* Tech tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] bg-white/[0.03] text-foreground/60 border border-white/5 px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Language and stars (if present) */}
        <div className="flex items-center gap-3.5 pt-3 text-[10px] text-foreground/40 border-t border-border">
          {project.language && (
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-foreground/40" />
              <span>{project.language}</span>
            </div>
          )}
          {project.stargazers_count !== undefined &&
            project.stargazers_count > 0 && (
              <div className="flex items-center gap-1">
                <Star className="size-3 text-foreground/40 group-hover:text-yellow-400 transition-colors" />
                <span>{project.stargazers_count} stars</span>
              </div>
            )}
        </div>
      </div>
    </motion.a>
  );
}
