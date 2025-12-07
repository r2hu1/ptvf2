"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Skeleton } from "./ui/skeleton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Repository {
	id: number;
	name: string;
	description: string | null;
	url: string;
	stargazers_count: number;
	language: string | null;
	updated_at: string;
	clone_url: string | null;
}

type Tab = "popular" | "latest";

export function Projects() {
	const [popular, setPopular] = useState<Repository[]>([]);
	const [latest, setLatest] = useState<Repository[]>([]);
	const [activeTab, setActiveTab] = useState<Tab>("popular");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/r2hu1/repos?per_page=100&sort=updated&direction=desc",
				);
				const data = await response.json();

				// Popular
				const popularRepos = data
					.filter(
						(repo: Repository) =>
							!repo.name.startsWith(".") && repo.stargazers_count > 0,
					)
					.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
					.slice(0, 5);

				// Latest (already sorted)
				const latestRepos = data
					.filter((repo: Repository) => !repo.name.startsWith("."))
					.slice(0, 5);

				setPopular(popularRepos);
				setLatest(latestRepos);
			} catch (error) {
				console.error("Failed to fetch repos:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const displayedProjects = activeTab === "popular" ? popular : latest;

	return (
		<section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="space-y-8"
			>
				<div className="flex items-center justify-between">
					<p
						className="text-sm text-foreground/90 grid gap-0.5 font-medium"
					>
						Projects
						<span className="text-muted-foreground text-xs">
							Some of my projects.
						</span>
					</p>
					<div className="flex items-center gap-4">
						<button
							onClick={() => setActiveTab("popular")}
							className={`px-3 py-1.5 text-xs transition-colors ${
								activeTab === "popular"
									? "text-foreground border-b border-foreground"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Popular
						</button>
						<Link
							  className={`px-3 py-1.5 text-xs transition-colors text-muted-foreground hover:text-foreground`}
							  href="https://github.com/r2hu1"
						>
							View All
						</Link>
					</div>
				</div>

				{loading ? (
					<div className="grid gap-6">
						{Array.from({ length: 5 }).map((_, index) => (
							<Skeleton key={index} className="w-full h-20" />
						))}
					</div>
				) : (
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className="grid gap-6"
					>
						{displayedProjects.length > 0 ? (
							displayedProjects.map((repo) => (
								<ProjectCard key={repo.id} repo={repo as any} />
							))
						) : (
							<div className="col-span-2 text-center text-muted-foreground">
								No projects found
							</div>
						)}
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
