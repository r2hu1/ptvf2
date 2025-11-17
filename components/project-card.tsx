"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Repository {
	id: number;
	name: string;
	description: string | null;
	clone_url: string;
	stargazers_count: number;
	language: string | null;
	updated_at: string;
}

export function ProjectCard({ repo }: { repo: Repository }) {
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
		hover: {
			y: -4,
			transition: { duration: 0.3 },
		},
	};

	return (
		<motion.a
			href={repo.clone_url.replace(".git", "")}
			target="_blank"
			rel="noopener noreferrer"
			variants={cardVariants}
			whileHover="hover"
			className="group block"
		>
			<div>
				<div className="space-y-1">
					<div className="flex items-start justify-between gap-3">
						<h3 className="text-foreground text-sm group-hover:text-foreground transition-colors">
							{repo.name}
						</h3>
						<ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
					</div>

					{repo.description && (
						<p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
							{repo.description}
						</p>
					)}

					<div className="flex items-center justify-between pt-3 border-t border-border/30">
						<div className="flex items-center gap-3 text-xs text-muted-foreground">
							{repo.language && <span>{repo.language}</span>}
							{repo.stargazers_count > 0 && (
								<>
									<span>·</span>
									<span>{repo.stargazers_count} stars</span>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</motion.a>
	);
}
