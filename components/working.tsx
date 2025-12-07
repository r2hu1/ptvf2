"use client";
import { motion } from "framer-motion";
import { CardType, WorkingCard } from "./working-card";

const data = [
	{
		name: "Tayst AI",
		position: "Founding Engineer",
		description:
			"As a Founding Engineer at Tayst, a U.S.-based startup, I’m building the company’s scalable backend and microservices infrastructure, while also contributing to the frontend to deliver a seamless user experience.",
		start_date: "17/09/2025",
	},
	{
		name: "Portals",
		position: "Frontend Developer",
		description:
			"It was a (UK) London based startup with great vision and a strong team of developers. I worked there as frontend developer, building their web application including the main landing page. And worked in integrating their backend apis with frontend.",
		start_date: "04/03/25",
		end_date: "03/06/25",
	},
	{
		name: "Open-Source Developer",
		position: "Contributor",
		description:
			"I also love contributing to open source! I’ve built a bunch of open-source projects myself from web apps, apis, micro apps to backend systems and even some AI stuff. Plus, I’ve contributed to several other open-source projects along the way",
		start_date: "2022",
	},
];

export default function WorkingExperience() {
	return (
		<section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="space-y-8"
			>
				<div className="text-sm text-foreground/90 grid gap-0.5 font-medium">
					Experience
					<span className="text-xs text-muted-foreground">
						Professional Working Experience.
					</span>
				</div>
				{data.map((item, index) => (
					<WorkingCard key={item.name} data={item as CardType} />
				))}
			</motion.div>
		</section>
	);
}
